import { Layout, Row, Col } from 'antd'
import React, { Component } from 'react'
import Category from '../components/Category'
import Draw from '../components/Draw'

import styles from './layout.less'

const { Header, Footer, Content } = Layout


export default class LayoutComp extends Component {
  render() {
    return (
      <Layout className="app">
          <Header className={styles.header}>
            <div className={styles.logo}>SHEIN</div>
          </Header>
          <Content>
          <Row>
            <Col span={8}>
              <Category />
            </Col>
            <Col span={16}>
              <Draw />
            </Col>
          </Row>
          </Content>
          <Footer>footer</Footer>
      </Layout>
    )
  }
}
