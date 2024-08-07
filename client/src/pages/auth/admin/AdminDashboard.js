import React from 'react'
import Layout from '../../../components/Layout/Layout'
import AdminMenu from './AdminMenu'
import { Col, Row } from 'react-bootstrap'

const AdminDashboard = () => {
  return (
    <Layout title={"Admin Dashboard - GP_LACHWAI"}>
      <div className='text-center'
      ><h1>Admin Dashboard</h1>
        <hr />
      </div>
      <Row>
        <Col md={3}>
          <AdminMenu />
        </Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard