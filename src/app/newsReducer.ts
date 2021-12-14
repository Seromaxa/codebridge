import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ADRESS } from "./constants"
import { INews } from "./types"

export const getArticles = createAsyncThunk(
  "news/getArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        ADRESS.base + ADRESS.articles + ADRESS.limit + "100"
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

interface NewsState {
  articles: INews[]
  errors: errors
  load: boolean
}
interface errors {
  code: number
  message: string
}
const initialState: NewsState = {
  articles: [],
  errors: {} as errors,
  load: false,
}

const News = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getArticles.fulfilled,
      (state, action: PayloadAction<INews[]>) => {
        state.articles = [...action.payload]
        state.load = true
        state.errors = {} as errors
      }
    )
    builder.addCase(getArticles.rejected, (state, action) => {
      state.errors = { ...(action.payload as errors) }
      state.load = false
    })
  },
})

export default News.reducer
