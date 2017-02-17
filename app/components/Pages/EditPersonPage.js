import React from 'react';
import PersonForm from '../Person/PersonForm';
import {Grid, Row, Col, Well, Alert} from 'react-bootstrap';
import Person from './../../resources/Person';

class NewPersonPage extends React.Component {

    constructor(){
        super();

        this.state = {
            contactName: "",
            notFound: false
        };
    }

    render(){
        if (this.state.editContact){
            return (
                <Grid>
                    <Row>
                        <Col lg={6} md={8} sm={12} lgOffset={3} mdOffset={2}>
                            <Well>
                                <h4>
                                    Editar Contato - {this.state.contactName}
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
        else if (this.state.notFound){
            return (
                <h4 className="center-align">Usuário não encontrado</h4>
            );
        }
        else{
            return (
                <h4 className="center-align">Buscando usuário...</h4>
            );
        }
    }

    componentWillMount(){


        Person.getSomeone(this.props.params.id)
            .then((person) => {
                this.setState({editContact: person, contactName: person.name});
            })
            .catch((error) => {
                this.setState({notFound: true});
            })
    }

    _getAlert(){
        if (this.state.showCreationAlert){
            return (
                <Alert bsStyle="success" onDismiss={this._handleAlert.bind(this)}>
                    <h4>Contato salvo com sucesso!</h4>
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
        Person.editPerson(this.state.editContact._id, this.state.editContact).then(() => {
            this.setState({contactName: this.state.editContact.name, showCreationAlert: true});
        });
    }

}

export default NewPersonPage;