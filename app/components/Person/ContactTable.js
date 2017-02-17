import React from 'react';
import { Table } from 'react-bootstrap';

class ContactTable extends React.Component {

    render(){
        return (
            <Table>
                <thead>
                <tr>
                    <th>Contato</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                {this._getContactRows()}
                </tbody>
            </Table>
        )
    }

    _getContactRows(){
        return this.props.contacts.map((contact, index) => {
            let activeClass;
            if (contact.main){
                activeClass = "success";
            }
            return (
                <tr className={activeClass} key={index}>
                    <td>{contact.number}</td>
                    <td>{contact.description}</td>
                </tr>
            );
        });
    }
}

export default ContactTable;