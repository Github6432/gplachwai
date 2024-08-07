import React from 'react'
import Layout from '../../../components/Layout/Layout'
import { Col, Row } from 'react-bootstrap'
import ControllerMenu from './ControllerMenu'
import AllUsers from '../AllUsers'

const ControllerDashboard = () => {
  return (
    <Layout title={"Controller Dashboard - GP_LACHWAI"}>
      <div className='text-center'
      ><h1>Controller Dashboard</h1>
        <hr />
      </div>
      <Row>
        <Col md={3}>
          <ControllerMenu />
        </Col>
      </Row>
    </Layout>
  )
}

export default ControllerDashboard