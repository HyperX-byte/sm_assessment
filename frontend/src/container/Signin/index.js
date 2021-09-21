import React, { useEffect, useState } from 'react';
import { Container, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout'
import { Input } from '../../components/UI/Input';
import { CustomButton } from '../../components/UI/Button';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css'

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(login(user));
    }

    //if (auth.authenticate) {
    //    return <Redirect to={`/`} />
    //}

    return (
        <Layout>
            <Container>
                <Form onSubmit={userLogin} >
                    <div className="py-5 px-4">
                        <div className="mb-5">
                            <h2>Welcome back!</h2>
                            <p>Please login to your account</p>
                        </div>
                        <Input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value) }
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value) }
                        />
                        <Row className="my-5">
                            <Col md={6}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Checkbox style={{ border: 'none', }} aria-label="Checkbox for following text input" />
                                    <Form.Control className="pt-2 px-3" value="Remember me" style={{ border: 'none' }} aria-label="Text input with checkbox" />
                                </InputGroup>
                            </Col>
                            <Col md={6} >
                                <Link to="" style={{ textDecoration: 'none' }} >Forgot Password ?</Link>
                            </Col>
                        </Row>
                        <CustomButton value="Login" />
                    </div>
                </Form>
            </Container>
        </Layout>
    )

}