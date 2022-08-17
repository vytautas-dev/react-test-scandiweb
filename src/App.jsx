import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Home, Cart, Category, Product } from './pages';

import './App.css';

function App() {
  const ProductWrapper = () => {
    const params = useParams();
    return <Product params={params} />;
  };

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductWrapper />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
