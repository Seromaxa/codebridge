import React, { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { getArticles } from "./app/newsReducer"

import "./App.css"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArticles())
    // eslint-disable-next-line
  }, [])

  return <div className="App"></div>
}

export default App
