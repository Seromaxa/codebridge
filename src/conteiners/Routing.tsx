import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../components/HomePage'
import Article from './ArticlePage'

const Routing = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/article/:id' element={<Article/>} />
            <Route path='*' element={<Navigate replace to='/' />}/>
        </Routes>
    )
} 
export default Routing
