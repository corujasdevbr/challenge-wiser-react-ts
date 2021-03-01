import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import Login from './signin'
import store from '../store/ducks'


export default function Home() {
  return (
    <Provider store={store}>
      <>
        <Login />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
      </>
    </Provider>
  )
}
