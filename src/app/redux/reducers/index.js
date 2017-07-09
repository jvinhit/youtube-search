import youtubelist from './youtube'
export default function combineReducer(currentState,action){
    var nextState = Object.assign({}, currentState);
    return{
        youtubelist: youtubelist(nextState.youtubelist, action)
    }
}