import React, { Component } from 'react';
import Person from '../components/Person';
import { getAllPeople } from '../API';

class People extends Component {
    state = {
        isLoading: true,
        people: [],
        singleView: false,
        person: {}
    };

    componentDidMount() {        
        getAllPeople()
            .then(people => {
                setTimeout(() => {
                    this.setState({
                        people,
                        isLoading: false
                    });
                }, 500);
            });
    }

    singleItemClicked = (person) => {
        this.setState({
            person,
            singleView: true
        })
    }

    render() {
        return (
            <div>
                { this.state.isLoading ? 
                    <h2> Loading people </h2> : 
                    <div className="row">
                        {
                            this.state.people.map(person => (
                                <div style={{ width:"33%" }}  key={person.id} onClick={() => this.singleItemClicked(person)}>
                                    <Person person={ person }/>
                                </div>
                            ))
                        }
                    </div>
                }
                <div>
                { !this.state.singleView ?
                    <h2> Click a person </h2>:
                    <Person person={this.state.person} cols="col-12" singleView={true} edit={true}/>
                 }
                </div>
            </div>
        )
    }
} 

export default People;