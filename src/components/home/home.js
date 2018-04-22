import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from './../user_profile/user_profile';
import Experience from './../experience/experience';
import company_avatar from './../../images/company-avatar.png';

const Home = () => (
    <Row>
        <Col m={4} s={12}>
            <UserProfile name="David Alves"/>
        </Col>
        <Col m={8} s={12}>
            <h5>About me</h5>
            <Card>
                <div>
                    <p>In the paradigm shift space, industry is dynamically impacting its mobile milestones. You need to effectively monetize your clouds to increase your market focus velocity. Company-wide enterprises are becoming wholesale agile workflow experts. We aim to reliably synergise our core competency by intelligently virtualising our senior customer-focused standard setters.</p>
                    <p>Change the way you do business - adopt competitive drivers. Seamless brands are becoming actionable architecture experts. Our World-Class Stack solution offers diversities a suite of next-generation offerings. Efficiencies will come from iteratively connecting our organic growths.</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiences</h5>
            <Experience  
                avatar={company_avatar}
                title="Developer"
                company="Company 1"
                description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
            />
            <Experience  
                avatar={company_avatar}
                title="Support Analyst"
                company="Company 2"
                description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
            />
            <Experience  
                avatar={company_avatar}
                title="Support Assistant"
                company="Company 3"
                description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
            />
        </Col>
    </Row>
);

export default Home;