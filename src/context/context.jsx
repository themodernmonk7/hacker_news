import React, { useContext } from "react"
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORIES,
} from "../actions"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppProvider.Provider value="hello">{children}</AppProvider.Provider>
}

// Custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
