import React from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';
let palette = generatePalette(seedColors[4]);
function App() {
  console.log(palette);
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>}/>
      <Route exact path='/palette/:id' render={() => <h1>INDIVIDUAL PALETTE</h1>} />
    </Switch>

    // <div className="App">
    //   <Palette palette={palette} />
    // </div>
  );
}

export default App;
