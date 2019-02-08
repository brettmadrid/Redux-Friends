import { LOADING, SUCCESS, FAILURE, 
         POST_SUCCESS, POST_FAILURE, 
         UPDATE_FAILURE, UPDATE_SUCCESS,
         DELETE_SUCCESS, DELETE_FAILURE } from "../actions/Actions";

const initialState = {
  friends: [],
  visible: true,
  showId: null,
  error: null,
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
      case LOADING:
      return {
        ...state,
        fetchingFriends: true,
        friends: [],
        error: null
      }
      case SUCCESS:
      console.log("reducer:", action.payload)
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload,
        error: null
      }
      case FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        friends: [],
        error: action.payload
      }
      case POST_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      }
      case UPDATE_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      }
      case DELETE_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload
      }
      default:
      return state;
  }
};

export default Reducer;
