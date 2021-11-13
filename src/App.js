import { BrowserRouter, Route,  Switch} from 'react-router-dom';
import './App.css';
import CarDetails from './pages/Cars/CarDetails/CarDetails';
import Cars from './pages/Cars/Cars';
import AuthProvider from './pages/context/AuthProvider/AuthProvider';
import AddCar from './pages/Dashboard/Admin/AddCar/AddCar';
import AllOrders from './pages/Dashboard/Admin/AllOrders/AllOrders';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import MainDashboard from './pages/Dashboard/MainDashboard/MainDashboard';
import CreateReview from './pages/Dashboard/NormalUser/CreateReview/CreateReview';
import MyOrders from './pages/Dashboard/NormalUser/MyOrders/MyOrders';
import Pay from './pages/Dashboard/NormalUser/Pay/Pay';
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











        {/* <Route path="/addCar">
        <Navigation></Navigation>
          <AddCar></AddCar>
        </Route>
        <Route path="/AllOrders">
        <Navigation></Navigation>
          <AllOrders></AllOrders>
        </Route>
        <Route path="/myOrders">
        <Navigation></Navigation>
          <MyOrders></MyOrders>
        </Route>
        <Route path="/makeAdmin">
        <Navigation></Navigation>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/pay">
        <Navigation></Navigation>
          <Pay></Pay>
        </Route>
        <Route path="/createReview">
        <Navigation></Navigation>
          <CreateReview></CreateReview>
        </Route> */}

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
