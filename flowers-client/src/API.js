const API_URL = 'http://localhost:5000/api/v1/people';

export function getAllPeople(){
    return fetch(API_URL)
        .then(res => res.json())
}

export function getPerson(id){
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
}

export function createPerson(person){
    return fetch(API_URL, {
        method:'POST',
        body: JSON.stringify(person),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json());
}