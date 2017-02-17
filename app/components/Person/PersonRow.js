import React from 'react';
import { Link } from 'react-router';

class PersonRow extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.index}</td>
                <td><Link to={`/person/${this.props.person._id}`}>{this.props.person.name}</Link></td>
                <td>{this.props.person.email}</td>
                <td>{this._getMainContact()}</td>
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

}

export default PersonRow;