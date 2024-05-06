import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import UserInfoPage from './pages/userInfoPage';
import HeaderApp from './components/header';

function App() {
  return (
    <div className="">
      <HeaderApp/>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        {/* <Route path='/user-info' component={RegisterPage} exact/> */}
        <Route path='/user-info/:userId' component={UserInfoPage} />
      </Switch>
    </div>
  );
}

export default App;
