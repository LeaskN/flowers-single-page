import React, { Component } from 'react';
import Person from '../components/Person';
import allPeople from '../data/allPeople';

class People extends Component {
    state = {
        people: allPeople,
        singleView: false,
        person: {},
        count: 0
    };

    singleItemClicked = (person) => {
        this.setState({
            person,
            singleView: true
        });
        this.newData.scrollIntoView({ behavior: "smooth" })
    }

    render() {
        return (
            <div>
                
                { 
                    <div className="row">
                        <h2 style={{width:'100%'}}> Click a person </h2>
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
                    <h2 style={{height:'800px'}}> Click a person </h2>:
                    <div class="row justify-content-center">
                        <Person person={this.state.person} cols="col-6 " singleView={true} edit={true}/>
                    </div>
                 }
                </div>
                <div className="cont" ref={(ref) => this.newData = ref}></div>
            </div>
        )
    }
} 

export default People;