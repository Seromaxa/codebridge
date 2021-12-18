import React,{ ChangeEvent } from "react"
import { InputAdornment, TextField, Container, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import styles from "./styles.module.scss"

interface IHeader {
  result?: number
  value:string
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

const Header = ({ result, onChange, value }: IHeader) => {
  return (
    <Container component={"header"} classes={{ root: styles.wrapper }}>
      <Typography align="left">Filter by keywords</Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          size: "small",
          onChange: onChange,
          value:value
        }}
        sx={{ minWidth: 1 / 3, marginBottom: 2, marginTop: 1, boxShadow: 2 }}
      />

      <Typography align="left">Result: {result ? result : 0}</Typography>
    </Container>
  )
}

export default React.memo(Header) 
