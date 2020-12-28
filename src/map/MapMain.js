import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Map from './Map';
import './Map.css';

export default class MapMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Container fluid className="h-100">
            <Row>
                <Col md={2}>LOGO</Col>
                <Col md={{ span: 6, offset: 4}}>Search Area</Col>
            </Row>
            <Row>
                <Col md={4}>Result Numbers</Col>
                <Col md={{ span:1, offset: 6 }}>Add a Tree</Col>
            </Row>
            <Row className="explore-content">
                <Col md={9}><Map /></Col>
                <Col md={3}>Detail / Eco Benefits</Col>
            </Row>
            <Row>
                <Col md={4}>Bottom Bar</Col>
            </Row>
        </Container>);
    }
}

