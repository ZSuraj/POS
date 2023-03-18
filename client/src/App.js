import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar/FullNavbar/Navbar'
import { useEffect } from 'react';
import { FullMenu } from './actions/menu';
import { useDispatch } from 'react-redux'
import { fetchAllCustomers } from './actions/allCustomers';
import { fetchAllOrders } from './actions/allOrders';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FullMenu())
  }, [dispatch])
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
