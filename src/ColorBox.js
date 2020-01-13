import React, { Component } from 'react';
import './ColorBox.css';
import  { CopyToClipboard } from 'react-copy-to-clipboard';


class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.copyColor = this.copyColor.bind(this);
    }

    copyColor() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 800);
        });
    }
    render() {
    const {background, name} = this.props;
        return (
            <div style={{background: background}} className="ColorBox">
                <div className="clearfix">.</div>
                <div style={{background: background}} className={`grow-box ${this.state.copied ? 'growing' : ''}`}></div> 
                <div className={`copy-msg ${this.state.copied ? 'shown' : ''}`}>
                    <h1>Copied</h1>
                    <p>{this.props.background}</p>
                </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <CopyToClipboard text={background} onCopy={this.copyColor}>
                            <button className='copy-button'>Copy</button>
                        </CopyToClipboard>
                    </div>
                <span className='see-more'>More</span>
            </div>
        )
    }
}

export default ColorBox;