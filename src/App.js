import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Service from './pages/Services/Service';


function App() {
  return (
    <div className="App">

      <Header />

      <Home />
<hr />
      <Service />
    </div>
  );
}

export default App;
