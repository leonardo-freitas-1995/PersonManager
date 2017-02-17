import React from 'react';
import { Well, Row, Col, Image } from 'react-bootstrap';
import Person from './../../resources/Person';
import ContactTable from './ContactTable'

class PersonCard extends React.Component {

    constructor(){
        super();

        this.state = {}
    }

    render(){
        if (this.state.person){
            return (
                <Well>
                    <h3 className="center-align">{this.state.person.name}</h3>
                    <Row>
                        <Col lg={8} lgOffset={2} sm={10} smOffset={1} >
                            <Image src="/images/person.png" circle responsive />
                        </Col>
                    </Row>
                    <h4 className="center-align">
                        {this.state.person.email}
                    </h4>
                    <div className="center-align">
                        <div><strong>Idade:</strong> {this.state.person.age}</div>
                        <div><strong>Sexo:</strong> {this._getPersonGender()}</div>
                    </div>
                    <br/>
                    <ContactTable contacts={this.state.person.numbers}/>
                </Well>
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

        if (this.props.person){
            this.setState({person: this.props.person});
        }
        else if (this.props.id){
            Person.getSomeone(this.props.id)
                .then((person) => {
                    this.setState({person});
                })
                .catch((error) => {
                    this.setState({notFound: true});
                })
        }
    }

    _getPersonGender(){
        let gender = this.state.person.gender;
        if (gender === "male"){
            return "Masculino";
        }
        else if (gender === "female"){
            return "Feminino";
        }

        return "Outro";
    }

}

export default PersonCard;