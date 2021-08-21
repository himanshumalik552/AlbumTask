import { ActionType } from "../contants/action-type";

const initialState ={
    albums:[],
}
export const albumReducer = (state= initialState, {type, payload})=>{

    switch (type) {
        case ActionType.SET_ALBUMS:
            return {...state, albums:payload};
        default:
            return state;
    }

}