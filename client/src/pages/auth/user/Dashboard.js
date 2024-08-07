import React from 'react'
import Layout from '../../../components/Layout/Layout'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const loginState = useSelector(state => state.loginUserReducer);
  const { currentUser } = loginState;
  return (
    <Layout title={"User Dashboard - GP_LACHWAI"}>
      <h1>Dashboard</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(loginState, null, 4)}</pre>
      <hr />
      <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(currentUser.user.role, null, 4)}</pre>
    </Layout>
  )
}

export default Dashboard