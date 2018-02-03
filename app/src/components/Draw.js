import React, { Component } from 'react'
import { Stage, Layer, Rect, Text, Image, Group, Circle } from 'react-konva';
import Konva from 'konva';
import styles from './draw.less'

export default class Draw extends Component {
  state = {
    image: null,
  }
  componentDidMount() {
    let image = new window.Image();
    image.src = "//img.ltwebstatic.com/images/pi/201710/96/15083290042909230245_thumbnail_405x552.jpg";
    image.onload = () => {
      this.setState({
        image
      })
    };
  }
  addAnchor = (group, x, y, name) => {

  }
  render() {
    return (
      <Stage width={500} height={500} shadowColor="green">
        <Layer>
          <Group
            draggable={true}
          >
            {
              [{x: 0, y: 100}, {x: 175, y: 100},{x: 0, y: 333}, {x: 175, y: 333}].map(({x, y}) => (
                <Circle x={x} y={y} stroke="#666" fill="#ddd" strokeWidth="1" radius={8} draggable={true}/>
              ))
            }
            <Image
              shadowColor="green"
              draggable={true}
              y={100}
              width={175}
              height={233}
              image={this.state.image}
            />
          </Group>
        </Layer>
      </Stage>
    )
  }
}
