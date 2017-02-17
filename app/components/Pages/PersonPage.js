import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import PersonCard from './../Person/PersonCard'

class PersonPage extends React.Component {
    render(){
        return (
            <Grid>
                <Row>
                    <Col lg={4} lgOffset={4} sm={12} >
                        <PersonCard id={this.props.params.id}/>
                    </Col>
                </Row>
            </Grid>
        )
    }


}

export default PersonPage;