import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}
        {/* <Header /> */}
        {/* <h1>ECommence WallatMart</h1> */}
          <Routes>
            <Route exact path="/login" Component={Login}></Route>
            <Route exact path="/register" Component={Register}></Route>
              <Route exact path="/" element ={ 
                  <Protected Cmp={ProductList}/>}>
              </Route>
              <Route exact path="/add" element ={ 
                <Protected Cmp={AddProduct}/>}>
              </Route>
              <Route exact path="/update/:id" element={
                <Protected Cmp={UpdateProduct}/>}>
              </Route>
            </Routes>
          {/* </Switch> */}
        </BrowserRouter>
      
    </div>
  );
}

export default App;
