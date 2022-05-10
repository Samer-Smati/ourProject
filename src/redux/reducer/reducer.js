import {ADD_NEW_USER} from '../action-type/actionType'

const initialize = {
    user:[]
}

const userReducer = (state=initialize,action) =>{
    switch (action.type) {
        case ADD_NEW_USER: return{
            ...state,
            user:action.payload
        }
    
        default: return state
    }
}

export default userReducer