import * as messages from '../Constants/messages';
import {CHANGE_NOTIFY} from '../Constants/actionTypes';

const initialState = messages.MSG_INTRO;
const notify = (state = initialState, action)=>{
    switch(action.type){
        case CHANGE_NOTIFY:
            state = action.content;
            return state;
        default:
            return state;
    }
}

export default notify;