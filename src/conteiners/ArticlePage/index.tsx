import { useEffect,useState } from 'react'
import {useAppSelector} from '../../app/hooks'
import {Container,CardMedia,Button,Typography} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {INews} from '../../app/types'

import {useParams,useNavigate} from 'react-router-dom'


const Article = () =>{
const {id} = useParams()
const navigate = useNavigate()
const article = useAppSelector(store=>store.news.articles)
const [current,setCurrent] = useState({} as INews)

useEffect(()=>{
    if(id){
        let buffer = article.find(item=>item.id === +id) as INews
        setCurrent({...buffer})
    }    
},[id,article])

const goBack = () => navigate(-1)



    return (
<>
<Container component={'header'} maxWidth={false} sx={{height:120,px:[0,0,0],m:0}}>
    <CardMedia component='img' image={current.imageUrl} sx={{height:'inherit'}}/>
</Container>
<Container component={'main'} sx={{width:'75%', minHeight:'70vh',position:'relative',bottom:40,background:'#ffff',border:1, borderColor: 'gray.500',borderRadius:1, boxShadow:3}}>
    <Typography variant='h5' sx={{textAlign:'center',mb:5,fontFamily:'Montserrat'}}>
     {current.title}
    </Typography>
    <Typography>
    {current.summary}
    </Typography>
</Container>
<Button onClick={goBack} startIcon={<ArrowBackIcon/>}>Back to homepage</Button>

</>
    )
}

export default Article
