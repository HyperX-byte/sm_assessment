import React from 'react'
import { Layout } from '../../components/Layout'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions';
/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const renderLoggedInLinks = () => {

    const logout = () => {
        dispatch(signout());
    }

    return (
            <span className="nav-link mr-2" style={{ position: 'absolute', right: '0'}} onClick={logout} >Sign Out</span>
    )
}

  return (
    <Layout>
      <Container>
        {renderLoggedInLinks()}
        <br/>
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