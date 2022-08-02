import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";

import FinderWrapper from './Components/FinderWrapper/FinderWrapper.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{borderRadius: "8px"}}>
        <FinderWrapper/>
      </div>
    </BrowserRouter>
  );
}

export default App;
