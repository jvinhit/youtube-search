export default function images(state= {data : [], loading:"Click button and wait loading image"}, action){
    switch(action.type){
        case "IMAGES":
            return Object.assign({}, state,{ data: action.data, loading : "loaded"});
        case "IMAGE_LOADING":
            return Object.assign({},state, {loading: 'loadedd.........'});
        default:
            return state;
    }
}