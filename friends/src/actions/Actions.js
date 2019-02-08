import axios from 'axios'

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const UPDATE_SUCCESS = "POST_SUCCESS";
export const UPDATE_FAILURE = "POST_FAILURE";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export function fetchFriends() {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .get("http://localhost:5000/api/friends")
      .then( response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: FAILURE,
          payload: "loading failure..."
        })
      })
  }
}

export function postFriend(friend) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then( response => {
        dispatch({
          type: POST_SUCCESS,
          payload: response.data
        })
      }) 
      .catch( err => {
        dispatch({
          type: POST_FAILURE,
          payload: "Post failure..."
        })
      })
  }
}

export function deleteFriend(id) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then( response => {
        dispatch({
          type: DELETE_SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: DELETE_FAILURE,
          payload: "Delete failure..."
        })
      })
  }
}

export function updateFriend(friend, id) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .put(`http://localhost:5000/api/friends/${id}`, friend)
      .then( response => {
        dispatch({
          type: UPDATE_SUCCESS,
          payload: response.data
        })
      }) 
      .catch( err => {
        dispatch({
          type: UPDATE_FAILURE,
          payload: "UPdate failure..."
        })
      })
    
  }
}