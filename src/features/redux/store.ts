import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import verReducer from './versions/verSlice'
import projectSlice from './projects/projectSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        versions: verReducer,
        projects: projectSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch