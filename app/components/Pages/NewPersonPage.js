import React from 'react';
import PersonForm from '../Person/PersonForm';
import {Grid, Row, Col, Well, Alert} from 'react-bootstrap';
import Person from './../../resources/Person';

class NewPersonPage extends React.Component {

    constructor(){
        super();

        this.state = {
            editContact: {
                name: "",
                email: "",
                gender: "male",
                age: "",
                numbers: [
                    {
                        number: "",
                        description: "",
                        main: false
                    }
                ]
            },
            showCreationAlert: false,
            showFailAlert: false
        };
    }

    render(){
        return (
            <Grid>
                <Row>
                    <Col lg={6} md={8} sm={12} lgOffset={3} mdOffset={2}>
                        <Well>
                            <h4>
                                Novo Contato
                            </h4>
                            <hr/>
                            <PersonForm
                                person={this.state.editContact}
                                finish={this._savePerson.bind(this)}
                                fail={this._handleFailAlert.bind(this)}
                            />
                            <br/>
                            <br/>
                            {this._getAlert()}
                        </Well>
                    </Col>
                </Row>
            </Grid>
        )
    }


    _getAlert(){
        if (this.state.showCreationAlert){
            return (
                <Alert bsStyle="success" onDismiss={this._handleAlert.bind(this)}>
                    <h4>Novo contato adicionado com sucesso</h4>
                </Alert>
            )
        }
        else if (this.state.showFailAlert){
            return (
                <Alert bsStyle="warning" onDismiss={this._handleAlert.bind(this)}>
                    <h4>Preencha corretamente os dados do contato.</h4>
                </Alert>
            )
        }
        return "";
    }

    _handleAlert(){
        this.setState({showCreationAlert: false, showFailAlert: false});
    }

    _handleFailAlert(){
        this.setState({showFailAlert: true});
    }

    _savePerson(){
        Person.createNewPerson(this.state.editContact).then(() => {
            let newPerson = {
                name: "",
                email: "",
                gender: "male",
                age: "",
                numbers: [
                    {
                        number: "",
                        description: "",
                        main: false
                    }
                ]
            };
            this.setState({newPerson, showCreationAlert: true});
        });
    }

}

export default NewPersonPage;