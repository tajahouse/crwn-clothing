import React, { useEffect, useState } from 'react';
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import firebase from './'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


  const HatsPage = (props) =>{
    // console.log(props)
    return(
        <div>
      <h1>Hats Page</h1>
    </div>
    )

  }
class App extends React.Component {

   constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
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
      <Header currentUser = { this.state.currentUser }/>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signIn" component={SignInAndSignUp} />
      </Switch>   
    </div>
  )
}
}

export default App;
