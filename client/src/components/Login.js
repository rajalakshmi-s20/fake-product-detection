import React from "react";
import { useState } from "react";
import * as Components from './Login-components.js';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [signIn, toggle] = React.useState(true);
    const navigate = useNavigate();
    const API_URL="http://localhost:3001/";
    
    const [cid, setCid] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const create_account = (e) => {
        e.preventDefault();
        fetch(API_URL+"api-login").then(response => response.json()).then(data => {
            const Object = data.find(item => item.cid === cid);
            if(Object){
                alert("Customer Id already exists");
            }else{
                Add_details();
                NavigateToResult();
            }
        })
    }

    const verify_account = (e) => {
        e.preventDefault();
        fetch(API_URL+"api-login").then(response => response.json()).then(data => {
            const Object = data.find(item => item.email === emailId && item.pwd === password);
            if(Object){
                NavigateToResult();
            }else{
                alert("Email Id and Password combination is Not Valid");
            }
        })
    }

    const NavigateToResult = () => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 1000);
      }

    async function Add_details(){
        const data = new FormData();
        data.append("cid",cid);
        data.append("email",email);
        data.append("pwd",pwd);
    
        fetch(API_URL+"api-login",{
          method:"POST",
          body:data
        }).then(res => res.json())
        .then((result) => {
          alert(result);
        })

        NavigateToResult();
    }
    
    return(
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={create_account}>
                    <Components.Title>SIGN UP</Components.Title>
                    <Components.Input type='text' placeholder='Customer Id' id='cid' onChange={(e) => {setCid(e.target.value)}}/>
                    <Components.Input type='email' placeholder='Email Id' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    <Components.Input type='password' placeholder='Password' id='pwd' onChange={(e) => {setPwd(e.target.value)}}/>
                    <Components.Button type="submit">Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={verify_account}>
                    <Components.Title>LOGIN</Components.Title>
                    <Components.Input type='email' placeholder='Email' id='emailId' onChange={(e) => {setEmailId(e.target.value)}}/>
                    <Components.Input type='password' placeholder='Password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    <Components.Button type="submit">Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info!
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us!
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}