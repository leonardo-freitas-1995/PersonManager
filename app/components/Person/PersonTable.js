import React from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import PersonRow from './PersonRow';
import Person from './../../resources/Person';

class PersonTable extends React.Component {
    constructor(){
        super();

        this.state = {
            people: [],
            showDeleteModal: false
        }
    }

    render(){
        return (
            <div>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contato principal</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this._getPersonRows()}
                    </tbody>
                </Table>

                <Modal show={this.state.showDeleteModal} onHide={this._closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deletar contato</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Deseja mesmo deletar o contato {this.state.deletingName}?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this._closeModal.bind(this)}>Cancelar</Button>
                        <Button bsStyle="danger" onClick={this._deletePerson.bind(this)}>Deletar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

    _getPersonRows(){
        return this.state.people.map((person, index) => {
            return (
                <PersonRow index={index + 1} person={person} remove={this._openDeleteModal.bind(this)} key={index}/>
            );
        });
    }

    _closeModal() {
        this.setState({ showDeleteModal: false });
    }

    _openDeleteModal(person) {
        this.setState({ showDeleteModal: true, deletingName: person.name, deletingID: person._id });
    }

    _deletePerson(){
        Person.deletePerson(this.state.deletingID).then(() => {
            this.setState({showDeleteModal: false});
            Person.getEveryone().then((people) => {
                this.setState({people});
            })
        })
    }

    componentWillMount(){
        Person.getEveryone().then((people) => {
            this.setState({people});
        })
    }
}

export default PersonTable;