import React, { Component } from 'react';

class PersonForm extends Component {
    state = { 
        person: {}
    }

    valueChanged = (e) => {
        const { name, value } = e.target
        this.setState((prevState) => ({
            person:{
                ...prevState.person, 
                [name]: value
            }
        }));
    }

    validPerson = () => {
        const { person } = this.state;
        const hasFirst = person.first.trim() !== '';
        const hasLast = person.last.trim() !== '';
        const hasDescription = person.description.trim() !== '';
        const hasAge = person.age.trim() !== '';
        const hasLocation = person.location.trim() !== '';
        const hasImg = person.url.trim() !== ''

        return hasFirst && hasLast && hasDescription && hasAge && hasLocation && hasImg;
    }

    formSubmitted = (event) => {
        event.preventDefault();
        if (this.validPerson()){
            this.props.onFormSubmitted(this.state.person);            
        }
    };

    render() {
        return (
            <form onSubmit={this.formSubmitted}>
                <div className="form-group">
                    <label htmlFor="first name">First Name</label>
                    <input onChange={ this.valueChanged } name="first" type="text" className="form-control" id="first name" placeholder="Enter first name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="last name">Last Name</label>
                    <input onChange={ this.valueChanged } name="last" type="text" className="form-control" id="last name" placeholder="Enter last name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Age">Age</label>
                    <input onChange={ this.valueChanged } name="age" type="number" className="form-control" id="age" placeholder="Enter age" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={ this.valueChanged } name="description" className="form-control" id="description" rows="3" placeholder="Enter description or famous quote"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input onChange={ this.valueChanged } name="location" type="text" className="form-control" id="location" placeholder="Enter location" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">Image</label>
                    <input onChange={ this.valueChanged } name="url" type="text" className="form-control" id="url" placeholder="http://example.com/image.jpg"required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )       
    }
}

export default PersonForm;