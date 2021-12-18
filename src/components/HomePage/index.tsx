import { ChangeEvent } from "react"
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import {getArticles, searching} from '../../app/newsReducer'
import { Container } from "@mui/material"
import {Button,Box} from '@mui/material'
import Header from "../Header"
import NewsList from "../NewsList"



const Home = () => {
  const dispatch = useAppDispatch()
  const {render,result,search} = useAppSelector(state=>state.news)
  const clickHandler = ()=>{
    dispatch(getArticles())
  }
  const changeHandler = (ev:ChangeEvent<HTMLInputElement>)=>{
    dispatch(searching(ev.target.value))
  }
  return (
    <>
      <Header onChange={changeHandler} result={result} value={search} />
      <Container component={"main"} sx={{ minWidth: 1 }}>
        <NewsList news={render} />
        <Box sx={{pt:2,pb:4,display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Button disabled={render.length > 0?false:true} variant="contained" onClick={clickHandler} >More news</Button>
         </Box>
      </Container>
    </>
  )
}

export default Home
