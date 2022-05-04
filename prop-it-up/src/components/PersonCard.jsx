import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    increaseAge= ()=>{
        this.setState({
            age:this.state.age +1
        })
    }
    render() {
        return <div>
            <div>
                <h1>{this.props.name}</h1>
                <p>Age:{this.state.age}</p>
                <p>Hair Color:{this.props.haircolor}</p>
            </div>
            <button onClick={this.increaseAge}>Birthday Button for {this.props.name}</button>
        </div>;
    }
}
    
export default PersonCard;