import React, { useContext, useEffect, useReducer } from "react"
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORIES,
} from "../actions"
import reducer from "../reducer/reducer"

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?"

// InitialState
const initialState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Fetch Stories
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORIES, payload: id })
  }

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  const handlePage = (value) => {
    // console.log(value)
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
