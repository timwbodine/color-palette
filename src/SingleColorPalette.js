import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.state={format:"hex"};
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeFormat(format) {
        this.setState({format:format});
    }
    render() {
        const {palette} = this.props.palette;
        const {emoji} = this.props.palette;
        const {paletteName} = this.props.palette;
        const {format} = this.state;
        const colorBoxes = palette.map(color => (
            <ColorBox hidden={true} background={color[format]} name={color.name} paletteId={color.paletteId} colorId={color.id} key={color.id} />
        ));
        return (
            <div className="Palette">
                <Navbar
                    format={format}
                    changeFormat={this.changeFormat}
                    showSlider={false}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter emoji= {emoji} paletteName= {paletteName} />
            </div>
        );
    }
}

export default SingleColorPalette;