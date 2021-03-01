 import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import account from './account'
import thunk from 'redux-thunk'

 const reducer = combineReducers({
    account,
    toastr: toastrReducer
})

export default createStore(reducer, applyMiddleware(thunk))