import React from 'react';
import { Link } from 'react-router';
import {Glyphicon} from 'react-bootstrap';

class PersonRow extends React.Component {

    render(){
        return (
            <tr>
                <td>{this.props.index}</td>
                <td><Link to={`/person/${this.props.person._id}`}>{this.props.person.name}</Link></td>
                <td>{this.props.person.email}</td>
                <td>{this._getMainContact()}</td>
                <td>
                    <Link to={`/edit_person/${this.props.person._id}`}><Glyphicon glyph="pencil" /></Link>
                    <a onClick={this._deletePerson.bind(this)} href="javascript:void(0)"><Glyphicon glyph="trash" /></a>
                </td>
            </tr>
        )
    }

    _getMainContact(){
        for (let contact of this.props.person.numbers){
            if (contact.main){
                return `${contact.number} - ${contact.description}`;
            }
        }

        if (this.props.person.numbers.length){
            let contact = this.props.person.numbers[0];
            return `${contact.number} - ${contact.description}`
        }

        return "";
    }

    _deletePerson(){
        this.props.remove(this.props.person);
    }

}

export default PersonRow;