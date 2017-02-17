import React from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button, Glyphicon, Checkbox} from 'react-bootstrap';

class PersonForm extends React.Component {
    
    constructor(){
        super();

        this.state = {
            person: {}
        }
    }

    render(){
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Nome</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.person.name}
                        onChange={this._inputHandlerFactory('name')}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        value={this.state.person.email}
                        onChange={this._inputHandlerFactory('email')}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Row>
                    <Col md={6} sm={12}>
                        <FormGroup>
                            <ControlLabel>Idade</ControlLabel>
                            <FormControl
                                type="number"
                                min="1"
                                value={this.state.person.age}
                                onChange={this._inputHandlerFactory('age')}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                    <Col md={6} sm={12}>
                        <FormGroup>
                            <ControlLabel>Sexo</ControlLabel>
                            <FormControl
                                componentClass="select"
                                placeholder="Selecione"
                                value={this.state.person.gender}
                                onChange={this._inputHandlerFactory('gender')}
                            >
                                <option value="male">Masculino</option>
                                <option value="female">Feminino</option>
                                <option value="other">Outro</option>
                            </FormControl>
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>
                <br/>
                <h4>Números</h4>
                <hr/>
                <Row>
                    {this._createContactsForm()}
                </Row>
                <hr/>
                <Button bsStyle="success" onClick={this._validateToFinish.bind(this)}>Salvar</Button>

            </form>
        )
    }

    componentWillMount(){
        this.setState({person: this.props.person});
    }

    _createContactsForm(){
        let contactsArr = this.state.person.numbers.map((contact, index) => {
            return (
                <Col key={index} md={6} sm={12}>
                    <FormGroup>
                        <ControlLabel>Número</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.person.numbers[index].number}
                            onChange={this._contactHandlerFactory(index, 'number')}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Descrição</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.person.numbers[index].description}
                            onChange={this._contactHandlerFactory(index, 'description')}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <Checkbox checked={this.state.person.numbers[index].main} onChange={this._mainContactHandlerFactory(index)}>
                        Contato principal
                    </Checkbox>
                    <Button bsStyle="danger" onClick={this._deleteHandlerFactory(index).bind(this)}><Glyphicon glyph="trash" /></Button>
                    <hr/>
                </Col>
            )
        });

        contactsArr.push(
            <Col key={'+'} md={6} sm={12}>
                <div className="center-align">
                    <br/>
                    <br/>
                    <br/>
                    <Button bsStyle="primary" onClick={this._addContact.bind(this)}><Glyphicon glyph="plus" /></Button>
                </div>
            </Col>);

        return contactsArr
    }

    _addContact(){
        let update = this.state.person;
        update.numbers.push({
            number: "",
            description: "",
            main: false
        });
        this.setState({person: update});
    }

    _deleteHandlerFactory(index){
        return (e) => {
            let update = this.state.person;
            update.numbers.splice(index, 1);
            this.setState({person: update});
        }
    }

    _inputHandlerFactory(attr){
        return (e) => {
            let update = this.state.person;
            update[attr] = e.target.value;
            this.setState({person: update});
        }
    }

    _contactHandlerFactory(index, attr){
        return (e) => {
            let update = this.state.person;
            update.numbers[index][attr] = e.target.value;
            this.setState({person: update});
        }
    }

    _mainContactHandlerFactory(index){
        return (e) => {
            let checked = e.target.checked;
            let update = this.state.person;

            update.numbers[index].main = checked;

            if (checked){
                for (let i in update.numbers){
                    if (i != index){
                        update.numbers[i].main = false;
                    }
                }
            }

            this.setState({person: update});
        }
    }

    _validateToFinish(){
        let person = this.state.person;
        if (!person.name || !person.email || !person.gender || !person.age){
            return this.props.fail();
        }
        for (let contact of person.numbers){
            if (!contact.number || !contact.description){
                return this.props.fail();
            }
        }

        this.props.finish();
    }

    
}

export default PersonForm