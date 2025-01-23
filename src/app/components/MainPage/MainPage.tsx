import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from '../Header';
import { RequestSection } from '../RequestSection';
import { ResponseSection } from '../ResponseSection';

const MainPage = () => {
    return(
        <Container fluid className="g-0">
            <Header/>
            <Container fluid className="g-0">
                <Row>
                    <Col>
                        <RequestSection />
                    </Col>
                    <Col>
                        <ResponseSection />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainPage;