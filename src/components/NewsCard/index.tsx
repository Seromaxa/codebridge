import { useState,useEffect } from "react"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Skeleton,
} from "@mui/material"
import { Link } from "react-router-dom"
import {useAppSelector} from '../../app/hooks'
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import Highlighter from 'react-highlight-words'
import { ICard } from "../../app/types"
import styles from "./cardStyles.module.scss"

const NewsCard = ({ imagen, title, description, date, id }: ICard) => {
const text = useAppSelector(state=>state.news.search)
const [search,setSearch] =  useState<string[]>([]) 
useEffect(()=>{
  if(text.length > 3){
    setSearch(text.split(/\s/).filter(item=>item))
  }
},[text])

  return (
    <Card sx={{ maxWidth: 400, height: 520 }}>
      {imagen ? (
        <CardMedia
          component="img"
          sx={{ height: 217 }}
          image={imagen}
          alt={title}
          classes={{ media: styles.imagen }}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{ height: 217, minWidth: 280, p: [0, 2, 8] }}
        />
      )}
      <CardContent sx={{ maxWidth: 350, height: 250, paddingBottom: 0 }}>
        {date ? (
          <Typography classes={{ root: styles.date }} sx={{ marginBottom: 3 }}>
            <CalendarTodayIcon />
            {date}
          </Typography>
        ) : (
          <Skeleton width="15%" />
        )}
        {title ? (
          // <Typography
          //   variant="h6"
          //   sx={{
          //     marginBottom: 2.5,
          //     fontFamily: "Montserrat",
          //   }}
          // >
          //   {title}
          // </Typography>
          <Highlighter 
          searchWords={search}
          textToHighlight={title}
          className={styles.title}
          />
        ) : (
          <Skeleton />
        )}
        {description ? (
          <Typography variant="body2"><Highlighter searchWords={search} textToHighlight={description} /></Typography>
        ) : (
          <Skeleton variant="rectangular" width="75%" height={60} />
        )}
      </CardContent>
      <CardActions>
        {id ? (
          <Link to={`article/${id}`} className={styles.link}>
            Read more <ArrowRightAltIcon />
          </Link>
        ) : (
          <Skeleton width="10%" />
        )}
      </CardActions>
    </Card>
  )
}

export default NewsCard
