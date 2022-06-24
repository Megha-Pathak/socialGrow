import "./NewsFeed.css";

import lscache from "lscache";
import { Facebook } from "react-content-loader";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchResponse } from "../../store/actions";
import { PostCard } from "../../components";

const NewsFeed = (props) => {
  const { fetchResponse, fetchedPostData } = props;
  const navigate = useNavigate();
  const cachedNewsFeedData = lscache.get("newsfeed");
  const viewNewsFeed = cachedNewsFeedData
    ? cachedNewsFeedData
    : fetchedPostData.response;

  const loadMoreData = () => {
    if (!fetchedPostData.isLoading) fetchResponse();
  };

  return (
    <div className="newsfeed-container">
      <div className="newsfeed-main">
        <div className="newsfeed-story">
          <div className="newsfeed-story-box">
            {viewNewsFeed?.slice(0, 9).map((item, index) => (
              <img
                className="newsfeed-user-story"
                src={item.imageURL}
                alt="profile"
                key={item.imageURL + index}
              />
            ))}
          </div>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMoreData}
            threshold={250}
            hasMore={true}
            loader={<Facebook />}
            useWindow={true}
            initialLoad={cachedNewsFeedData ? false : true}
          >
            {cachedNewsFeedData?.map((item, key) => (
              <PostCard postData={item} key={key} />
            ))}
          </InfiniteScroll>
        </div>
        <div className="suggestion-box">
          <div className="newsfeed-suggestion">
            <div className="suggested-titles">People you might like</div>
            <div className="newsfeed-see-all">See all</div>
          </div>
          {viewNewsFeed
            ?.slice(0, 5)
            .filter((item) => item.username)
            .map((item, index) => (
              <div className="user-suggestion" key={index}>
                <div
                  className="suggested-user"
                  onClick={() => navigate(`/profile/${item.username}`)}
                >
                  <img
                    className="suggested-user-profile-photo"
                    src={item.imageURL}
                    alt="profile"
                  />
                  <span>{item.username}</span>
                </div>
                <div className="suggested-user-follow">Follow</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedPostData: state.fetchPost,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponse: () => dispatch(fetchResponse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
