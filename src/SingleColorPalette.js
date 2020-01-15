import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class SingleColorPalette extends Component {
    render() {
        const {palette} = this.props;
        const colorBoxes = palette.map(color => (
            <ColorBox hidden={true} background={color.hex} name={color.name} paletteId="meh" colorId={color.id} key={color.id} />
        ));
        return (
            <div className="Palette">
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;