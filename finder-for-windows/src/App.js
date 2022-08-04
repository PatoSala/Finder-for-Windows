import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import FinderWrapper from './resources/Components/FinderWrapper/FinderWrapper.js';

function App() {

  useEffect(() => {
    console.log(window.electron.node);
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <FinderWrapper/>
      </div>
    </BrowserRouter>
  );
}

export default App;
