import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material"
import { Link } from "react-router-dom"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { ICard } from "../../app/types"
import { lenghOfString, formatDate } from "../../app/utilts"
import styles from "./cardStyles.module.css"

const NewsCard = ({ imagen, title, description, date, id }: ICard) => {
  return (
    <Card sx={{ maxWidth: 400, height: 520 }}>
      <CardMedia
        component="img"
        sx={{ height: 217 }}
        image={imagen}
        alt={title}
        classes={{ media: styles.imagen }}
      />
      <CardContent>
        <Typography classes={{ root: styles.date }}>
          <CalendarTodayIcon />
          {formatDate(date)}
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{lenghOfString(description)}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`${id}`}>
          <Button size="small" startIcon={<ArrowRightAltIcon />}>
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default NewsCard
