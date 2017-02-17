import React from 'react';
import { Table } from 'react-bootstrap';
import PersonRow from './PersonRow';
import Person from './../../resources/Person';

class PersonTable extends React.Component {
    constructor(){
        super();

        this.state = {
            people: []
        }
    }

    render(){
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contato principal</th>
                    </tr>
                </thead>
                <tbody>
                    {this._getPersonRows()}
                </tbody>
            </Table>
        )
    }

    _getPersonRows(){
        return this.state.people.map((person, index) => {
            return (
                <PersonRow index={index + 1} person={person} key={index}/>
            );
        });
    }

    componentWillMount(){
        Person.getEveryone().then((people) => {
            this.setState({people});
        })
    }
}

export default PersonTable;