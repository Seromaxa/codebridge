import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Links } from "./constants"
import {setRender} from './utilts'
import { INews, INewsState, IErrors } from "./types"
import type { RootState } from './store'



export const getArticles = createAsyncThunk(
  "news/getArticles",
  async (_, { rejectWithValue, getState }) => {
   const {limit,page}:INewsState = (getState() as RootState).news 
  
    try {
      const response = await fetch(
        Links.server + Links.articles + Links.limit +limit + Links.start + page
      )

      if (!response.ok) {
        return await response.json()
      }

      const data = await response.json()
      return data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

const initialState: INewsState = {
  articles: [],
  render:[],
  search:'',
  result:0,
  errors: {} as IErrors,
  load: false,
  limit:15,
  page:0
}

const News = createSlice({
  name: "news",
  initialState,
  reducers: {
    searching(state,action){
      state.search = action.payload
      setRender(state,action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getArticles.fulfilled,
      (state, action: PayloadAction<INews[]>) => {
        state.articles.push(...action.payload)
        state.load = true
        state.page = state.page + state.limit
        state.errors = {} as IErrors  
        setRender(state,state.search)  
           
      }
    )
    builder.addCase(getArticles.rejected, (state, action) => {
      state.errors = { ...(action.payload as IErrors) }
      state.load = false
    })
  },
})
export const {searching} =News.actions
export default News.reducer
