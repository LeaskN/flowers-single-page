import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PersonForm from './PersonForm';
import { createPerson } from '../API';

class CreatePerson extends Component {

    state = { 
        person: {
            first: '',
            last: '',
            age: 0,
            location: '',
            description: '',
            image: ''
        },
        creating: false
    }

    createPerson = (person) => {
        person.age = Number(person.age);
        console.log('In create person:', person);
        this.setState({
            creating: true
        });    
        createPerson(person)
            .then(result => {
                console.log(result);
                this.props.history.push(`/people/${result.id}`)                
            });
    };

    render() {
        return (
            <div>
                <h1>Create Person</h1>
                <PersonForm onFormSubmitted={this.createPerson} person={this.state.person} />
            </div>
        )
    }
}

export default withRouter(CreatePerson);