import React, { Component } from 'react';
import { Row, Col } from "react-materialize";
import './loader.css';

class Loader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        {this.props.skill}
                        <div className="loader-container">
                            <div className="loader" 
                                style={{width:this.props.knowledge, backgroundColor:this.props.color}}
                            ></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Loader;