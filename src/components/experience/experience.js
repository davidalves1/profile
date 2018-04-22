import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';

class Experience extends Component {
    render() {
        return (
            <Card>
                <Row>
                    <Col s={2} m={2}>
                        <img src={this.props.avatar} 
                            alt={this.props.name}
                            className="circle responsive-img"
                        />
                        {this.props.name}
                    </Col>
                    <Col s={10} m={10}>
                        <p><b>{this.props.title} in {this.props.company}</b></p>
                        <p>{this.props.description}</p>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Experience;