import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import AddService from './Pages/AddServoce/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  //60-4 finish
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        } />
        <Route path="/addService" element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
