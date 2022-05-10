import {ADD_NEW_USER} from '../action-type/actionType'
import axios from 'axios'

// export const addUser = (userData) => { 
//     return (dispatch) => {
//     return axios.post("http://localhost:5050/register",userData).then((res) => { 
//         dispatch({ 
//         type: ADD_NEW_USER, 
//         payload: res.data,   
//       });
//     });
//   };
// }

export const addUser=(user)=>async(dispatch)=>{
    
try {
    const res=  await  axios.post('http://localhost:5050/register',user)

    dispatch({type:ADD_NEW_USER, payload:res.data})  // {msg,user,token}

} catch (error) {
    console.log(error)}
}