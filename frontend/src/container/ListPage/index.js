import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from '../../components/Layout';
import { getAllEmails } from '../../actions/userlist.actions';
/**
* @author
* @function ListPage
**/

export const ListPage = (props) => {
  const email = useSelector(state => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmails());
  }, []);

  const renderEmails = (emails) => {
    let getEmail = [];
    for (let email of emails) {
      getEmail.push(<li key={email}>{email}</li>);
    }
    return getEmail
  }

  return (
    <Layout>
      <Container>
        <div className="my-5">
          <h2>List Of all user emails</h2>
          <br />
          <ul style={{ textAlign: 'left' }}>
            {renderEmails(email.emails)}
          </ul>
        </div>
      </Container>
    </Layout>
  )

}