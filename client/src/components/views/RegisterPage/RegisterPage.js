import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState(""); // state를 만듬. Email 통해 값 가져올 수 있고, setEmail 함수를 통해 값 바꾸기 가능
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 이거 안 하면 누를때마다 페이지가 새로고침됨

        if(Password !== ConfirmPassword){
            return alert('비밀번호가 일치하지 않습니다.');
        }

        let body = {
            name: Name,
            email: Email,
            password: Password,
            confirmPassword: ConfirmPassword
        }

        dispatch(registerUser(body)) // action 실행
            .then(response => {
                if(response.payload.success){
                    props.history.push('/login'); // 페이지 이동
                }else{
                    alert('Error');
                }
            })
    }


    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
                     width:'100%', height:'100wh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                <br />
                <button>
                    회원 가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage);
