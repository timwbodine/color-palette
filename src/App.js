import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette, getSingleColorPalette} from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  findColorPalette(id, colorid) {
    return getSingleColorPalette(generatePalette(this.findPalette(id)), colorid);
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/:id/:colorid' render={(routeProps) => <SingleColorPalette routeProps={routeProps} palette={this.findColorPalette(routeProps.match.params.id, routeProps.match.params.colorid)}/>}/>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}/>
        <Route exact path='/palette/:id' 
           render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
        </Switch>
    );
  }
}

export default App;
