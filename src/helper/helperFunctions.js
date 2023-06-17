export const updateSearchQuery = (dispatch, query) =>
  dispatch({ type: "INIT_SEARCHQUERY", payload: query });

export const selectMenuSelection = (e, dispatch, id, data) => {
  const { value } = e.target;
  if(value){
    dispatch({type:"UPDATE_BOOKS",payload:{state:value,id}})
  }
  // if (value === "read") {
  //   dispatch({ type: "MOVE_TO_READ", payload: { data, id } });
  // } else if (value === "currentlyReading") {
  //   dispatch({ type: "MOVE_TO_CURRENTLYREADING", payload: { data, id } });
  // } else if (value === "wantToRead") {
  //   dispatch({ type: "MOVE_TO_WANTTOREAD", payload: { data, id } });
  // } else if (value === "none") {
  //   dispatch({ type: "MOVE_TO_NONE", payload: { data, id } });
  // }
};

export const filterBooks = (array, query) => {
  let filteredArray = array;
  if (query) {
    filteredArray = filteredArray.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return filteredArray;
};
