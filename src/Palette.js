import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';
import Navbar from './Navbar';
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state={level:500, format:"hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level:level});
    }
    changeFormat(format) {
        this.setState({format:format});
    }
    render() {
        const {colors, paletteName, emoji} = this.props.palette;
        const {level} = this.state;
        const {format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ));
        return (
            <div className="Palette" >
                <Navbar
                    changeLevel={this.changeLevel}
                    level={level}
                    format={format}
                    changeFormat={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        );
    } 
    }

    export default Palette;