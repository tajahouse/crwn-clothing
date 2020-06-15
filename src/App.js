import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';


  const HatsPage = (props) =>{
    // console.log(props)
    return(
        <div>
      <h1>Hats Page</h1>
    </div>
    )

  }
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signIn" component={SignInAndSignUp} />
      </Switch>

    
      
    </div>
  );
}

export default App;
