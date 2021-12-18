import NewsCard from "../NewsCard"
import styles from "./newsList.module.scss"
import { INews } from "../../app/types"

interface Props {
  news: INews[]
}
const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.news_list}>
      {news.length > 0
        ? news.map((item) => {
            return (
              <li key={item.id}>
                <NewsCard
                  imagen={item.imageUrl}
                  title={item.title}
                  description={item.summary}
                  date={item.publishedAt}
                  id={item.id}
                />
              </li>
            )
          })
        : Array.from(new Array(6)).map((item, index) => {
            return (
              <li key={index}>
                <NewsCard
                  imagen={item}
                  title={item}
                  description={item}
                  date={item}
                  id={item}
                />
              </li>
            )
          })}
    </ul>
  )
}

export default NewsList
