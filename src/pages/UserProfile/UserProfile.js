import "./UserProfile.css";

import { useEffect, useState } from "react";

import lscache from "lscache";
import { Facebook } from "react-content-loader";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";

import {
  clearUserPhotos,
  fetchUserPhotos,
  fetchUserProfile,
} from "../../store/actions";
import { ErrorPage, ImageCard, PostCard } from "../../components";

function UserProfile(props) {
  const [isGridActive, setIsGridActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const urlText = window.location.href;
  const urlUserName = urlText.slice(urlText.lastIndexOf("/") + 1);
  const {
    fetchUserPhotos,
    fetchUserProfile,
    fetchedUserPhotoData,
    fetchedUserProfileData,
    clearUserPhotos,
  } = props;
  const cachedProfileData = lscache.get(urlUserName)
    ? lscache.get(urlUserName)
    : fetchedUserProfileData.response;
  const cachedPhotoData = lscache.get(`${urlUserName}Photos`)
    ? lscache.get(`${urlUserName}Photos`)
    : fetchedUserPhotoData.response;
  const {
    username,
    followersCount,
    followingCount,
    totalPhotos,
    profileImage,
  } = cachedProfileData;
  useEffect(() => {
    setIsLoading(true);
    if (lscache.get(urlUserName) === null) fetchUserProfile();
    setTimeout(() => setIsLoading(false), 1500);
    return () => {
      clearUserPhotos();
    };
  }, [fetchUserProfile, clearUserPhotos, urlUserName]);

  const setViewToGrid = () => {
    setIsGridActive(true);
  };

  const setViewToTimeline = () => {
    setIsGridActive(false);
  };

  const fetchMorePhotos = () => {
    fetchUserPhotos(fetchedUserPhotoData?.response?.length / 9 + 1);
  };
  return (
    <div className="userprofile-container">
      {isLoading ? (
        <Facebook />
      ) : !fetchedUserProfileData.hasError && !fetchedUserPhotoData.hasError ? (
        <div>
          <div className="user-profile-page">
            <div className="user-overview">
              <img className="profile-picture" src={profileImage} alt="DP" />
              <div className="user-profile-data">
                <div className="user-name">{username}</div>
                <div className="user-follow-data">
                  <span className="usp301userPostCount">
                    {totalPhotos} Posts
                  </span>
                  <span className="usp301userFollowersCount">
                    {followersCount} Followers
                  </span>
                  <span className="usp301userFollowingCount">
                    {followingCount} Following
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile-view-buttons">
            <button className="usp301btnGrid" onClick={setViewToGrid}>
              Grid
            </button>
            <button className="usp301btnTimeline" onClick={setViewToTimeline}>
              Timeline
            </button>
          </div>
          {isGridActive ? (
            <GridUserInterface
              fetchMorePhotos={fetchMorePhotos}
              cachedPhotoData={cachedPhotoData}
              totalPhotos={totalPhotos}
            />
          ) : (
            <TimeLineUserInterface
              fetchMorePhotos={fetchMorePhotos}
              cachedPhotoData={cachedPhotoData}
              totalPhotos={totalPhotos}
            />
          )}
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
function GridUserInterface(props) {
  const { fetchMorePhotos, totalPhotos, cachedPhotoData } = props;
  return (
    <div className="usp301gridView">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMorePhotos}
        threshold={250}
        hasMore={cachedPhotoData?.length >= totalPhotos ? false : true}
        loader={<Facebook />}
        useWindow={true}
        initialLoad={true}
      >
        <ImageCard particularUserPosts={cachedPhotoData} key={0} />
      </InfiniteScroll>
    </div>
  );
}
function TimeLineUserInterface(props) {
  const { fetchMorePhotos, cachedPhotoData, totalPhotos } = props;
  return (
    <div className="usp301timeLineView">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMorePhotos}
        threshold={250}
        hasMore={cachedPhotoData.length >= totalPhotos ? false : true}
        loader={<Facebook />}
        useWindow={true}
        initialLoad={false}
      >
        <div className="abcd">
          {cachedPhotoData?.map((item, key) => (
            <PostCard postData={item} key={key} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    fetchedUserPhotoData: state.fetchUserPhoto,
    fetchedUserProfileData: state.fetchUserProfileData,
  };
}
const mapDispatchToProps = (dispatch) => {
  const urlText = window.location.href;

  return {
    fetchUserPhotos: (page) =>
      dispatch(
        fetchUserPhotos(urlText.slice(urlText.lastIndexOf("/") + 1), page)
      ),
    fetchUserProfile: () =>
      dispatch(fetchUserProfile(urlText.slice(urlText.lastIndexOf("/") + 1))),
    clearUserPhotos: () => dispatch(clearUserPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
