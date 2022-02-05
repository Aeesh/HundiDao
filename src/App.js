import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import SwipeableTemporaryDrawer from './components/sideBar';
import PersistentDrawerLeft from './components/drawer';

function App() {
  return (
    <div className="App">
      {/* <SwipeableTemporaryDrawer /> */}
      <PersistentDrawerLeft />
     <Home />
    </div>
  );
}

export default App;
