import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
    const {background, name} = this.props;
        return (
            <div style={{background: background}} className="ColorBox" >
                <div className="clearfix">.</div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColorBox;