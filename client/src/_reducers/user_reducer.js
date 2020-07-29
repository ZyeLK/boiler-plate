import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types'

// 현재 state, action 받고 다음 state 반환
export default function(state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }; //... spread operator: 원래 state에 있는 거 똑같이 가져옴(빈 상태)
        
        case REGISTER_USER:
            return { ...state, registerSuccess: action.payload};
        
        case AUTH_USER:
            return { ...state, userData: action.payload}; // 모든 유저 데이터 다 들어있음

        default:
            return state;
    }
}