import React, { useEffect, useState } from 'react';
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import firebase from './'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils'


  const HatsPage = (props) =>{
    // console.log(props)
    return(
        <div>
      <h1>Hats Page</h1>
    </div>
    )

  }
class App extends React.Component {

  // const [currentUser, setCurrentUser] = useState({})

  // useEffect(()=>{
  //     auth.onAuthStateChanged(user =>{
  //       setCurrentUser(user(currentUser))
  //       console.log(user)
  //     })
  // },[])// Figure out how to use it as hooks

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    auth.onAuthStateChanged(user =>{
    this.setState({ currentUser: user })
    console.log(user)
    })
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
