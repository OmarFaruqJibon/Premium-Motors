import { BrowserRouter, Route,  Switch} from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import CarDetails from './pages/Cars/CarDetails/CarDetails';
import Cars from './pages/Cars/Cars';
import ContactUs from './pages/ContactUs/ContactUs';
import AuthProvider from './pages/context/AuthProvider/AuthProvider';
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import Sidebar from './pages/Dashboard/Sidebar/Sidebar';
import Footer from './pages/Footer/Footer';
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
          <Footer></Footer>
        </Route>
        <PrivateRoute path="/dashboard">
        <Navigation></Navigation>
          <MainDashboard></MainDashboard>
          <Footer></Footer>
        </PrivateRoute>
        <PrivateRoute path="/carDetails/:carId">
        <Navigation></Navigation>
          <CarDetails></CarDetails>
          <Footer></Footer>
        </PrivateRoute>
        <Route path="/login">
        <Navigation></Navigation>
          <Login></Login>
          <Footer></Footer>
        </Route>
        <Route path="/register">
        <Navigation></Navigation>
          <Register></Register>
          <Footer></Footer>
        </Route>
        <Route path="/about">
        <Navigation></Navigation>
          <AboutUs></AboutUs>
          <Footer></Footer>
        </Route>
        <Route path="/contact">
        <Navigation></Navigation>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </Route>
        <PrivateRoute path="/sidebar">
        <Navigation></Navigation>
          <Sidebar></Sidebar>
          <Footer></Footer>
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
