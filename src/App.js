import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Service from './pages/Services/Service';
import HowItWorks from './pages/HowItWorks/HowItWorks';


function App() {
  return (
    <div className="App">

      <Header />

      <Home />
<hr />
      <Service />
<hr />
      <HowItWorks />      
    </div>
  );
}

export default App;
