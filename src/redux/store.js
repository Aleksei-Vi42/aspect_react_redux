import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReduser from './main_reduser'
import mainSlice from './main_reduser'

const rootReduser =  combineReducers ({
  contentData: mainReduser,


})

const store = configureStore ({
    reducer: rootReduser,
})

export default store