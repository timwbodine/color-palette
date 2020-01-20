import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';
import {Link} from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format:"hex", open:false}
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar= this.closeSnackbar.bind(this);
    }

    handleFormatChange(val) {
        this.setState({format:val.target.value, open:true});
        this.props.changeFormat(val.target.value);
    }
    closeSnackbar(evt) {
        console.log(evt);
        this.setState({open:false});
    }
    render() {
        return (
            <div className="Navbar">
                <div className="navbar-name">
                    <h4><Link to= '/'>REACTCOLORPICKER</Link></h4>
                </div>
                {this.props.showSlider &&
                    <div className='slider'>
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
                        />
                    </div>
                }
                <div className='select-container'>
                    <Select 
                    value ={this.state.format} 
                    renderValue={value => `${value}`}
                    onChange={this.handleFormatChange} 
                    >
                        <MenuItem  value="hex">Hexadecimal value like #fff</MenuItem>
                        <MenuItem value="rgb">RGB value for rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA value for rgba(255,255,255,0.1)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed to {this.state.format.toUpperCase()}!</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton 
                            onClick={this.closeSnackbar}
                            color='inherit' 
                            key='close' 
                            aria-label='close'
                        >
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />

            </div>
        )
    }
}

export default Navbar;