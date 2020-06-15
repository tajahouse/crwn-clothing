import React from 'react';

import './sign-in.styles.scss'

import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from "../../../components/custom-button/custom-button.component"

import { signInWithGoogle, signInWithTwitter } from '../../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:""
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({
            email:"",
            password:""
        })

    }

    handleChange = e =>{
            const {value, name} = e.target;
            this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>              
                   <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} placeholder="email" required/> 
                   <FormInput name='password' type ='password' handleChange={this.handleChange} value={this.state.password}  placeholder="password" required/>
                   <CustomButton type="submit">Sign In</CustomButton>    
                   <button onClick={ signInWithGoogle } className="google-button">Sign In With Google</button>   
                   <button onClick={ signInWithTwitter } className="twitter-button">Sign In With Twitter</button>           
                </form>

            </div>
        )
    }
}

export default SignIn;