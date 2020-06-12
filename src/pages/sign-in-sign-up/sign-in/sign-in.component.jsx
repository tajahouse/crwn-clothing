import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:""
        }
    }
    render() {
        return(
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and Password</span>

                <form>
                   <input name='email' type='email' value={this.state.email} required/> 
                   <input name='password' type ='password' value={this.state.password} required/>
                   <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}