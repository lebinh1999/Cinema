import './App.css';
// Route
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {routeHome,routeCheckout,routeAdmin} from './Route';
import HomeTemplate from "./Container/HomeTemplate";
import CheckoutTemplate from "./Container/CheckoutTemplate";
import AdminTemplate from "./Container/AdminTemplate";
import Loader from "./Component/Loader/index";
import PageNotFound from './Container/PageNotFound';
import Login from './Container/HomeTemplate/Login';
import Register from './Container/HomeTemplate/Register';
import AuthPage from './Container/AdminTemplate/AuthPage';

function App() {
  const showLayoutHome = (route) => {
    if(route && route.length >0){
      return route.map((item,index)=>{
        return (
          <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  const showLayoutCheckout = (route) => {
    if(route && route.length >0){
      return route.map((item,index)=>{
        return (
          <CheckoutTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  const showLayoutAdmin = (route) => {
    if(route && route.length > 0){
      return route.map((item, index)=>{
        return (
          <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
        )
      })
    }
  }
  
  return (
    <BrowserRouter>
    <Loader />
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutCheckout(routeCheckout)}
        {showLayoutAdmin(routeAdmin)} 
        <Route path="/auth" component={AuthPage} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        {showLayoutAdmin(routeAdmin)}
        <Route path="" component={PageNotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
