import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORIES,
} from "../actions"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORIES:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }

    default:
      throw new Error(`not matching "${action.type}" action type`)
  }
}

export default reducer
