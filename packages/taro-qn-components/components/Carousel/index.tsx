import React, { Component, ReactElement, ReactNode } from 'react';
import { View } from '@tarojs/components';

import CarouselItem from './CarouselItem';
import CarouselDots from './CarouselDots';
import CarouselArrow from './CarouselArrow';

import { ICarouselProps, ICarouselState } from './types/carousel'
import './index.less';


export default class Carousel extends Component<ICarouselProps, ICarouselState> {

  autoPlayFlag: ReturnType<typeof setInterval> | null

  static defaultProps = {
    height: 300,
    speed: 1.5,
    delay: 4,
    // pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
    };
    this.autoPlayFlag = null
  }

  // 向前向后多少
  turn(n: number): void {
    let _n: number = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({ nowLocal: _n });
  }

  // 开始自动轮播
  goPlay(): void {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, (this.props.delay as number) * 1000);
    }
  }

  // 暂停自动轮播
  pausePlay(): void {
    clearInterval(this.autoPlayFlag as ReturnType<typeof setInterval>);
  }

  componentDidMount() {
    this.goPlay();
  }

  render(): ReactElement {
    const { items, height, speed, arrows, dots } = this.props
    const count: number = items.length;

    const itemNodes: ReactNode[] = items.map((item, idx) => {
      return <CarouselItem item={item} count={count} key={`item_${idx}`} />;
    });

    const arrowsNode: ReactNode = <CarouselArrow turn={this.turn.bind(this)}/>;

    const dotsNode: ReactNode = <CarouselDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

    return (
      <View
        className="carousel"
        style={{ height }}
      >
        <View
          className="carousel-box"
          // onMouseOver={this.props.pause ? this.pausePlay.bind(this) : () => {}}
          // onMouseOut={this.props.pause ? this.goPlay.bind(this) : () => {}}
          style={{
            left: -100 * this.state.nowLocal + "%",
            transitionDuration: speed + "s",
            width: items.length * 100 + "%"
          }}
        >
          {itemNodes}
        </View>
        {arrows ? arrowsNode : null}
        {dots ? dotsNode : null}
      </View>
    );
  }
}
