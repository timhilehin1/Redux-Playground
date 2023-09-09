import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducer from './Reducers/user.jsx'
import themeReducer from './Reducers/theme'
import arrayReducer from './Reducers/array'

const store = configureStore({
  reducer:{
    user : userReducer,
    theme: themeReducer,
    array : arrayReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
