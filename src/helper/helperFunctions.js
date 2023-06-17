
export const moveToRead = (dispatch, id, data) =>
  dispatch({ type: "MOVE_TO_READ", payload: { data, id } });

export const selectMenuSelection = (e,dispatch,id,data) =>{
    const {value} = e.target;
    
    if(value==="read"){
        dispatch({ type: "MOVE_TO_READ", payload: { data, id } });
    }else if(value==="currentlyReading"){
        dispatch({ type: "MOVE_TO_CURRENTLYREADING", payload: { data, id } });
    }else if(value==="wantToRead"){
        dispatch({ type: "MOVE_TO_WANTTOREAD", payload: { data, id } });
    }
    else if(value==="none"){
        dispatch({ type: "MOVE_TO_NONE", payload: { data, id } });
    }
} 
