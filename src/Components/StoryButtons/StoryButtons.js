import React from 'react';
import './StoryButtons.css';
export default class StoryButtons extends React.Component{
    constructor(props){
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event){
        const buttonValue = event.target.innerHTML;


        if(buttonValue.toUpperCase() === "A"){
            this.props.newSelection("A");
        }

        if(buttonValue.toUpperCase() === "B"){
            this.props.newSelection("B");
        }

        const newPointer = (parseInt(this.props.pointer) + 1).toString() + buttonValue.toLowerCase();

        this.props.changeText(newPointer);

    }

    render(){
        return (
            <div className='story-buttons-container'>

                <div className='story-button'>
                    <button onClick={this.handleOnClick}
                            disabled={this.props.pointer === "5a" || this.props.pointer === "5b"}>A</button>
                    <p>{this.props.buttonTextA}</p>
                </div>

                <div className='story-button'>
                    <button onClick={this.handleOnClick}
                            disabled={this.props.pointer === "5a" || this.props.pointer === "5b"}>B</button>
                    <p>{this.props.buttonTextB}</p>
                </div>

            </div>
        )
    }
}