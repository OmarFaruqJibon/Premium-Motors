import { BrowserRouter, Route,  Switch} from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import CarDetails from './pages/Cars/CarDetails/CarDetails';
import Cars from './pages/Cars/Cars';
import AuthProvider from './pages/context/AuthProvider/AuthProvider';
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import Sidebar from './pages/Dashboard/Sidebar/Sidebar';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Navigation/Navigation';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/cars">
          <Navigation></Navigation>
          <Cars></Cars>
        </Route>
        <PrivateRoute path="/dashboard">
        <Navigation></Navigation>
          <MainDashboard></MainDashboard>
        </PrivateRoute>
        <Route path="/carDetails/:carId">
        <Navigation></Navigation>
          <CarDetails></CarDetails>
        </Route>
        <Route path="/login">
        <Navigation></Navigation>
          <Login></Login>
        </Route>
        <Route path="/register">
        <Navigation></Navigation>
          <Register></Register>
        </Route>
        <Route path="/about">
        <Navigation></Navigation>
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/sidebar">
        <Navigation></Navigation>
          <Sidebar></Sidebar>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        
      </Switch>
    </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
