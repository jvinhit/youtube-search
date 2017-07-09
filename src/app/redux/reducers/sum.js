export default function sum(state = 0, action){
    switch(action.type){
        case 'SUM':
            return parseInt(action.a) + parseInt(action.b);
        default:
            return state;
    }
}