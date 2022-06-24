import { useEffect } from "react";

import { Facebook } from "react-content-loader";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { PostCard } from "../../components";

import fetchResponse from "../../store/actions";

const NewsFeed = (props) => {
  const { fetchResponse, fetchPost } = props;
  useEffect(() => {
    fetchResponse();
  }, [fetchResponse]);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchResponse}
      threshold={250}
      hasMore={true}
      loader={<Facebook />}
      useWindow={true}
    >
      {fetchPost?.map((item, key) => (
        <PostCard postData={item} key={key} />
      ))}
    </InfiniteScroll>
  );
};

function mapStateToProps(state) {
  return {
    fetchPost: state.fetchPost,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponse: () => dispatch(fetchResponse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
