import { ChangeEvent } from "react"
import { InputAdornment, TextField, Container, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import styles from "./styles.module.scss"

interface IHeader {
  result?: number
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

const Header = ({ result, onChange }: IHeader) => {
  return (
    <Container component={"header"} classes={{ root: styles.wrapper }}>
      <Typography align="left" gutterBottom={true}>
        Filter by keywords
      </Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          onChange: onChange,
        }}
      />

      <Typography>Result: {result ? result : 0}</Typography>
    </Container>
  )
}

export default Header
