import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import Loader from '../loader/loader';
import avatar from '../../images/profile.jpg';

class UserProfile extends Component {
    render() {
        return (
            <Card>
                <Row>
                    <Col s={8} m={8} offset="s2 m2">
                        <img src={avatar} className="circle responsive-img" alt={this.props.name}/>
                    </Col>
                </Row>
                <Row  className="center-align">
                    <h5>{this.props.name}</h5>
                    <p className="blue darken-4 white-text" style={{padding: "10px 0"}}>
                        Fullstack Developer
                    </p>
                </Row>
                <Row className="center-align">
                    <Loader skill="Javascript" knowledge="70%" color="#F7DF1E"/>
                    <Loader skill="PHP" knowledge='80%' color="#8892BF"/>
                    <Loader skill="Python" knowledge='60%' color="#3A76A6"/>
                </Row>
            </Card>
        )
    }
};

export default UserProfile;