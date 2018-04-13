import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from './../user_profile/user_profile';

const Home = () => (
    <Row>
        <Col m={4} s={12}>
            <UserProfile name="David Alves"/>
        </Col>
        <Col m={8} s={12}>
            <h5>About me</h5>
            <Card>
                <div>
                    <p>Este é o primeiro parágrafo que eu estou escrevendo</p>
                    <p>Este é o segundo parágrafo que eu estou escrevendo</p>
                    <p>Este é o terceiro parágrafo que eu estou escrevendo</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiences</h5>
            <p>Experiências</p>
        </Col>
    </Row>
);

export default Home;