import React from 'react'
import { Layout } from '../../components/Layout'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
  return (
    <Layout>
      <Container>
        <div className="my-5">
          <h1>Build By
            With Regards,
            Pranav Sharma</h1>
          <ul className="list-unstyled" style={{ textAlign: 'left' }}>
            <li><Link to="/login">Login Page</Link></li>
            <li><Link to="/register">Register Page</Link></li>
            <li><Link to="/list">User Email List</Link></li>
          </ul>
        </div>
      </Container>
    </Layout>
  )

}