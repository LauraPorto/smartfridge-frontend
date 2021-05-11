import './App.css';
import './css/main.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Rutas
import Home from './containers/Home/home';
import Profile from './containers/Profile/profile';
import Register from './containers/Register/register';
import Store from './containers/Store/store';
import About from './containers/About/about';
import Explore from './containers/Explore/explore';
import HomeUser from './containers/HomeUser/homeUser';
import RecipeInfo from './containers/RecipeInfo/recipeInfo';
import Result from './containers/Result/result';
import Building from '../src/containers/Building/building';

import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/register' exact component={Register}/> 
          <Route path='/store' exact component={Store}/> 
          <Route path='/about' exact component={About}/> 
          <Route path='/explore' exact component={Explore}/> 
          <Route path='/home-user' exact component={HomeUser}/> 
          <Route path='/recipe-info' exact component={RecipeInfo}/> 
          <Route path='/result' exact component={Result}/> 
          <Route path='/building' exact component={Building}/> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
