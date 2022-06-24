import "./NewsFeed.css";

import lscache from "lscache";
import { Facebook } from "react-content-loader";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";

import { fetchResponse } from "../../store/actions";
import { PostCard } from "../../components";

const NewsFeed = (props) => {
  const { fetchResponse, fetchedPostData } = props;
  const cachedNewsFeedData = lscache.get("newsfeed");

  const loadMoreData = () => {
    if (!fetchedPostData.isLoading) fetchResponse();
  };

  return (
    <div className="newsfeed-container">
      <div className="newsfeed-main">
        <div className="newsfeed-story">
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
