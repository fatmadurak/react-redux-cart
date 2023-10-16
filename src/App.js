
import { useEffect } from 'react';
import './App.css';
import CartList from './CartList';
import Navbar from './Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { calculateTotal } from './redux/CartSlice';

function App() {

  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch=useDispatch()
  useEffect(()=>{


     dispatch(calculateTotal())


  },[cartItems])


  return (
 <>
 
 <Navbar/>
 <CartList/>
 
 
 </>
  );
}

export default App;
