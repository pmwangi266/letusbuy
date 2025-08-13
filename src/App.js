import './App.css';
import { BrowserRouter as Router,Routes,Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './components/Signin';
import Home from './components/Home'
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Howtoshop from './components/Howtoshop';
import Navbar from './components/Navbar'
import Disclaimer from './components/Disclaimer';
import FAQ from './components/FAQ';
import Product from './components/Product';
function App() {
  return (
    <Router>
  <div className="App container-fluid">
        <div className="main-content">
    <header className="hero">
  <div className="hero-brand">
    
  </div>
  <div className="hero-center">
    <h1>Let Us Buy 365</h1>
    <p>Your Everyday Guide to Smarter Online Shopping — Powered by Affiliate Insight</p>
  </div>
</header>
          <Navbar />
      <Routes>
          <Route path="/signin" Component={Signin}></Route>
          <Route path="/signup" Component={Signup}></Route>
          <Route path="/aboutus" Component={About}></Route>
          <Route path="/contactus" Component={Contact}></Route>
          <Route path="/" Component={Home}></Route>
          <Route path="/terms" Component={Terms}></Route>
          <Route path="/privacy" Component={Privacy}></Route>
          <Route path="/how-to-shop" Component={Howtoshop}></Route>
          <Route path="/disclaimer" Component={Disclaimer}></Route>
          <Route path="/faq" Component={FAQ}></Route>
          <Route path="/products" Component={Product}></Route>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;