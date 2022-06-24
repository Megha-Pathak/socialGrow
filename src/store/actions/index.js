import unsplash from "../../api/index";

const fetchResponse = () => {
  return async (dispatch) => {
    const response = await unsplash.get("/photos/random", {
      params: { count: 10 },
    });
    console.log("action creator response", response);
    dispatch({
      type: "FETCH_RESPONSE",
      payload: response,
    });
  };
};

export default fetchResponse;
