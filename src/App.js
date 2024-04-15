import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Service from './pages/Services/Service';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Property from './pages/Property/Property';
import Blog from './pages/Blog/Blog';
import Testimonal from './pages/Testimonal/Testimonal';


function App() {
  return (
    <div className="App">

      <Header />

      <Home />
<hr />
      <Service />
<hr />
      <HowItWorks />

      <Property />

      <Blog />      

      <Testimonal />
    </div>
  );
}

export default App;
