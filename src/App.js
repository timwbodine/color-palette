import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from './colorHelpers';
let palette = generatePalette(seedColors[4]);
class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>}/>
    <Route exact path='/palette/:id' 
           render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
      </Switch>

      // <div className="App">
      //   <Palette palette={palette} />
      // </div>
    );
  }
}

export default App;
