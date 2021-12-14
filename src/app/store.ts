import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import News from "./newsReducer"

export const store = configureStore({
  reducer: {
    news: News,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
