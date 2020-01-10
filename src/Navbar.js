import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

class Navbar extends Component {
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
            </div>
        )
    }
}

export default Navbar;