import React, { Component } from 'react';

import Person from '../components/Person';
import { getPerson } from '../API';

class ViewPerson extends Component {

    state = {
        isLoading: true,
        person: {}
    };

    componentDidMount(){
        const { id } =  this.props.match.params;
        getPerson(id)
            .then(person => {
                setTimeout(() => {
                    this.setState({
                        person,
                        isLoading: false
                    });
                }, 500);
            });
    }

    render() {
        return this.state.isLoading ?
            <h2> Loading Person... </h2>:
            <Person person={this.state.person} cols="col-12" singleView={true} edit={true}/>
    }
}

export default ViewPerson;