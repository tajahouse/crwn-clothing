import React from "react";
import "../../pages/sign-in-sign-up/sign-in-sign-up.styles.scss"
import SignIn from "../../pages/sign-in-sign-up/sign-in/sign-in.component"
import SignUp from './sign-up/sign-up.component';
const SignInAndSignUp = () =>{
    return(
        <div className='sign-in-sign-up'>
            <h1>Sign in</h1>
            <SignIn />
            <SignUp/>

        </div>
    )
}
export default SignInAndSignUp;