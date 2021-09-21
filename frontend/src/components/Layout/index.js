import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import img from './background.jpg';
import './style.css'
/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
      <Container fluid>
        <Row style={{ height:'100vh'}} >
          <Col md={7} className="left-column p-0" >
            <Image className="img-left" style={{ objectFit: 'cover', height:'100%',width:'100%'}} src={img} />
          </Col>
          <Col md={5}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  )

}