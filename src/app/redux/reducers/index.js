import youtubelist from './youtube'
import {combineReducers} from 'redux'
// export default function combineReducer(currentState,action){
//     var nextState = Object.assign({}, currentState);
//     return{
//         youtubelist: youtubelist(nextState.youtubelist, action)
//     }
// }
export default combineReducers({
    youtubelist // shorthand propertyname
})