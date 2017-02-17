import React from 'react';
import PersonTable from './../Person/PersonTable'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

class IndexPage extends React.Component{
    render(){
        return <div>
                <h1 className="center-align">Bem vindo ao Person Manager</h1>
                <h3 className="center-align"><small>Apenas um nome gourmet para um software de contatos.</small></h3>
            <hr/>

            <PersonTable/>

            <br/>

            <div className="center-align">
                <Link to={'/new_person'}>Novo Contato</Link>
            </div>
        </div>
    }
}

export default IndexPage;