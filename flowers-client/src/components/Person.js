import React from 'react';
import { Link } from 'react-router-dom';


const Person = ({ person, cols, singleView, edit }) => (
    <div className={`card ${cols}`} >
        <img className="card-img-top" style={{cursor:"pointer"}} src={person.url} alt="Card cap"/>
        <div className="card-body">
            <h5 className="card-title" style={{cursor:"pointer"}} >{person.first} {person.last}</h5>
            { singleView ?
                <div>
                    <p className="card-text">About: { person.description }</p>
                    <p className="card-text">Age: { person.age }</p>
                    <p className="card-text">Location: { person.location }</p> 
                </div> :
                ''
            }
            {
                edit ?
                <Link to={`/people/${person.id}`} className="btn btn-primary">Edit Person </Link>:
                <Link to={`/people/${person.id}`} className="btn btn-outline-info">About</Link>
            }
        </div>
    </div>
)

export default Person;