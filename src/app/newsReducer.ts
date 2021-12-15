import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Links } from "./constants"
import { INews, INewsState, IErrors } from "./types"

export const getArticles = createAsyncThunk(
  "news/getArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        Links.server + Links.articles + Links.limit + Links.amount
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
  errors: {} as IErrors,
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
        state.errors = {} as IErrors
      }
    )
    builder.addCase(getArticles.rejected, (state, action) => {
      state.errors = { ...(action.payload as IErrors) }
      state.load = false
    })
  },
})

export default News.reducer
