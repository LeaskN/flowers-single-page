import React, { Component } from 'react';
import Person from '../components/Person';
import allPeople from '../data/allPeople';

class People extends Component {
    state = {
        isLoading: true,
        people: [],
        singleView: false,
        person: {},
        count: 0
    };

    componentDidMount() {        
            setTimeout(() => {
                this.setState({
                    people: allPeople,
                    isLoading: false
                });
            }, 500);
    }

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
                
                { this.state.isLoading ? 
                    <h2> Loading people </h2> : 
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