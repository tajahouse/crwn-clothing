import React, { useEffect, useState } from 'react';
import {Link, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import firebase from './'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from '../src/redux/user/user.actions'

  const HatsPage = (props) =>{
    // console.log(props)
    return(
        <div>
      <h1>Hats Page</h1>
    </div>
    )

  }
class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const setCurrentUser = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()

          });
          console.log(this.state)
        })
      }
      this.setState({ currentUser: userAuth})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInAndSignUp/>)} />
      </Switch>   
    </div>
  )
}
}

const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
