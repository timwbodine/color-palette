import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.state={format:"hex"};
        this.changeFormat = this.changeFormat.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    changeFormat(format) {
        this.setState({format:format});
    }
    handleClick(evt) {
        return this.props.routeProps.history.goBack();
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
            <div className="Palette SingleColorPalette">
                <Navbar
                    format={format}
                    changeFormat={this.changeFormat}
                    showSlider={false}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div style={{background: "black"}} className="ColorBox">
                        <div className="clearfix">.</div>
                        <div className="copy-container">
                            <button onClick={this.handleClick} className='back-button'>Go Back</button>
                        </div>
                    </div>
                </div>
                <PaletteFooter emoji= {emoji} paletteName= {paletteName} />
            </div>
        );
    }
}

export default SingleColorPalette;