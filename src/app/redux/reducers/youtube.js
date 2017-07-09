export default function youtubelist(state = {data: [], loading:"get List loading...."}, action){
   switch(action.type){
        case "ytube":
            return {...state, data: action.data, loading: "complete"};
        case "ytube_loading": 
            return { ...state, loading: "video loading"};
        default : 
            return {...state};
    }
}