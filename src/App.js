import React from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';
let palette = generatePalette(seedColors[4]);
function App() {
  console.log(palette);
  return (
    <div className="App">
      <Palette palette={palette} />
    </div>
  );
}

export default App;
