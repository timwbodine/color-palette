import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format:"hex"}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val) {
        this.setState({format:val.target.value});
        this.props.changeFormat(val.target.value);
    }
    render() {
        return (
            <div className="Navbar">
                <div className="navbar-name">
                    <h4>REACTCOLORPICKER</h4>
                </div>
                <div className='slider'>
                    <Slider
                        defaultValue={this.props.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.props.changeLevel}
                    />
                </div>
                <Select 
                value ={this.state.format} 
                renderValue={value => `${value}`}
                onChange={this.handleChange} 
                >
                    <MenuItem  value="hex">Hexadecimal value like #fff</MenuItem>
                    <MenuItem value="rgb">RGB value for rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA value for rgba(255,255,255,0.1)</MenuItem>
                </Select>
            </div>
        )
    }
}

export default Navbar;