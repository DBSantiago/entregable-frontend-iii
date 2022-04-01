import React from 'react';

export default class StorySelections extends React.Component{
    render(){
        return (
            <div>
                <p>Selección anterior: {this.props.selections[this.props.selections.length - 1]}</p>
                <p>Historial de selecciones: {this.props.selections.join("-")}</p>
            </div>
        )
    }
}