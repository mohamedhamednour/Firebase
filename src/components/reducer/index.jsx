import thunk from "redux-thunk"

import axios from "axios";
import { createSlice, createStore, combineReducers, createAsyncThunk, applyMiddleware } from '@reduxjs/toolkit'



const urlAPi = 'https://fakestoreapi.com/products'

export const todoapis = createAsyncThunk('Api/todoapis', async (args, thankAPI) => {
  const { RejectWithValue } = thankAPI
  try {

    return await axios(urlAPi)
      .then(res => {
        const data = res.data
        console.log(data)
        return (data)
      })


  } catch (error) {
    return RejectWithValue(error.message)
  }
});


const apiSlice = createSlice({
  name: 'Api',
  initialState: { books: [] ,isloading:false ,error : true},
  extraReducers: {
    [todoapis.pending]: (state, action) => {
      state.isloading = true
      state.error = true
    },
    [todoapis.fulfilled]: (state, action) => {

      state.isloading = false
      state.books = action.payload


    },
    [todoapis.rejected]: (state, action) => {
      state.isloading = true
      state.error = action.payload


      console.log(action)

    }


  },
})












const allData = combineReducers({
  apiSlice:apiSlice.reducer
  })


export const Store = createStore(allData, applyMiddleware(thunk))
