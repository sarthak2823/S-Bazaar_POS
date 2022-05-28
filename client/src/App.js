
import 'antd/dist/antd.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Items from './pages/Items';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
