import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props){
    const dispatch = useDispatch();

    const [Email, setEmail] = useState(""); // state를 만듬. Email 통해 값 가져올 수 있고, setEmail 함수를 통해 값 바꾸기 가능
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 이거 안 하면 누를때마다 페이지가 새로고침됨

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)) // loginUser라는 action 실행
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history.push('/'); // 페이지 이동
                }else{
                    alert('Error');
                }
            })
    }

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
                     width:'100%', height:'100wh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);