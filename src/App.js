import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import MobyDick from './MobyDick';
import OldManAndTheSea from './OldManAndTheSea';

// 1) Render a Route for MobyDick: moby-dick
// 2) Render a Route for OldManAndTheSea: old-man-and-the-sea

function App() {
  return (
    <div>
      <BrowserRouter >
        <Route path="/moby-dick" component={MobyDick}/>
        <Route path="/old-man-and-the-sea" component={OldManAndTheSea}/>
      </BrowserRouter> 
    </div>
  );
}

export default App;