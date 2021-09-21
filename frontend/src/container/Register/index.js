import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Layout } from '../../components/Layout'
import { Input } from '../../components/UI/Input';
import { CustomButton } from '../../components/UI/Button';
import { register } from '../../actions';

/**
* @author
* @function Register
**/

export const Register = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userRegister = (e) => {

        e.preventDefault();

        const user = {
            name, mobile, email, password
        }

       dispatch(register(user));
    }


    //if (auth.authenticate) {
    //    return <Redirect to={`/`} />
    //}

    //if (user.loading) {
    //    return <p>Loading....</p>
    //}
    
    return (
        <Layout>
            <Container>
                    <div className="py-5 px-5">
                        <div className="mb-2">
                            <h2>Welcome back!</h2>
                            <p>Please Register your account</p>
                        </div>
                        {user.message}{user.errors}
                        <Form onSubmit={userRegister}>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <CustomButton value="Register" />
                        </Form>
                    </div>
            </Container>
        </Layout>
    )

}