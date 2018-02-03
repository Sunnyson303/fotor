import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Row, Col } from 'antd'
import styles from './Category.less'

const TabPane = Tabs.TabPane

export default class Category extends Component {
  state = {
    tabContents: [],
    embellishments: [
      '//img.shein.com/images/shein.com/201705/f5/14954321478019744269_thumbnail_405x552.jpg',
      '//img.ltwebstatic.com/images/pi/201710/5a/15075135923263714803_thumbnail_405x552.jpg',
      '//img.shein.com/images/shein.com/201606/1467162878174969614.jpg',
      '//img.ltwebstatic.com/images/pi/201708/37/15039702933146168323_thumbnail_405x552.jpg',
    ],
    products: [
      '//img.ltwebstatic.com/images/pi/201712/e2/15142800122496548455_thumbnail_405x552.jpg',
      '//img.ltwebstatic.com/images/pi/201801/ef/15162650442645280530_thumbnail_405x552.jpg',
      '//img.shein.com/images/201604/1461847276191081657.jpg',
      '//img.ltwebstatic.com/images/pi/201711/9f/15108263596450246714_thumbnail_405x552.jpg',
    ],
  }

  componentDidMount() {
    const { products } = this.state
    let tabContents = products
    this.setState({
      tabContents
    })
  }

  handleTabClick = payload => {
    const { products, embellishments } = this.state
    this.setState({
      tabContents: payload === 'Blouses' ? products : embellishments
    })
  }

  render() {
    const tabTitles = ['Blouses', 'Beauty']
    return (
      <Tabs tabPosition='left' onTabClick={this.handleTabClick}>
        {
          tabTitles.map((title, index) => (
            <TabPane tab={title} key={title}>
              <Row>
                {
                  this.state.tabContents.map(item => (
                    <Col span={12} key={item}>
                      <img src={item} className={styles.contentImg} />
                    </Col>
                  ))
                }
              </Row>
            </TabPane>
          ))
        }
      </Tabs>
    )
  }
}
