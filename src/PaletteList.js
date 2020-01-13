import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
    render() {
    const { palettes } = this.props;
    console.log(palettes);
        return (
            <div>
                {palettes.map((p) => (
                    <MiniPalette {...p}/>
                ))}
            </div>
        )
    }
}

export default PaletteList;