import React from 'react';
import './StoryText.css';

export default class StoryText extends React.Component {
    render(){
        return (
            <p>{this.props.text}</p>   
        )
    }
}
