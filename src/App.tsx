import  { useEffect } from "react"
import { useAppDispatch } from "./app/hooks"
import { getArticles } from "./app/newsReducer"
import Routing from './conteiners/Routing'


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
  
    dispatch(getArticles())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
  <Routing />
    </div>
  )
}

export default App
