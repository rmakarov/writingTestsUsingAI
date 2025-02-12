import React, { useCallback, useState } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Header } from '../Header';
import { RequestSection } from '../RequestSection';
import { ResponseSection } from '../ResponseSection';

const MainPage = () => {
    const [aiResponse, setAiResponse] = useState('');

    const aiRequestHandler = useCallback((response) => {
        setAiResponse(response);
    }, [setAiResponse]);

    return(
        <Container fluid className="g-0" style={{ overflowX: 'hidden' }}>
            <Header/>
            <Container fluid>
                <Row>
                    <Col>
                        <RequestSection onChange={aiRequestHandler} />
                    </Col>
                    <Col>
                        <ResponseSection aiResponse={aiResponse} />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainPage;