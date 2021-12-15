import { ChangeEvent } from "react"
import { Container } from "@mui/material"
import { INews } from "../../app/types"
import Header from "../Header"
import NewsList from "../NewsList"

interface IHome {
  news: INews[]
  result: number
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
}

const Home = ({ news, result, onChange }: IHome) => {
  return (
    <>
      <Header onChange={onChange} result={result} />
      <Container component={"main"}>
        <NewsList news={news} />
      </Container>
    </>
  )
}

export default Home
