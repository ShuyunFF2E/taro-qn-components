import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';

import './index.less';

const selector = `${prefixCls}-loading`;

function Loading(props) {
  const { tip, layer, layerColor } = props;
  const loadingType = classNames(`${selector}-container`, {
    [`${selector}-layer`]: layer,
  });
  return (
    <View
      className={loadingType}
      style={{
        background: `${layerColor}`,
      }}
    >
      <View className={`${selector}-animation`}>
        <View className={`${selector}-circle`} />
      </View>
      {tip && <View className={classNames(`${selector}-text`)}> {tip} </View>}
    </View>
  );
}

class CLoading extends Component {
  timer = null;

  constructor(props) {
    super(props);
    this.state = {
      delayShow: true,
    };
  }

  updateShowStatus() {
    const { delay, loading } = this.props;
    if (loading) {
      this.timer = setTimeout(() => {
        this.setState({
          delayShow: true,
        });
      }, delay);
    } else {
      this.setState({
        delayShow: false,
      });
    }
  }

  componentDidMount() {
    if (this.props.delay > 0) {
      this.updateShowStatus();
    }
  }

  componentDidUpdate(prevProps) {
    const { delay, loading } = this.props;
    if (delay > 0 && prevProps.loading !== loading) {
      this.updateShowStatus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { loading, layer, tip, children, className, style, layerColor } =
      this.props;
    const classes = classNames(selector, className);

    const { delayShow } = this.state;

    return children ? (
      <View className={classes} style={style}>
        {children}
        {loading && delayShow && (
          <Loading tip={tip} layer={layer} layerColor={layerColor} />
        )}
      </View>
    ) : (
      loading && delayShow && (
        <View className={classes} style={style}>
          <Loading tip={tip} layer={layer} layerColor={layerColor} />
        </View>
      )
    );
  }
}

CLoading.propTypes = {
  loading: PropTypes.bool,
  layer: PropTypes.bool,
  layerColor: PropTypes.string,
  tip: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

CLoading.defaultProps = {
  loading: true,
  layer: false,
  layerColor: '#fff',
  tip: '',
  delay: 0,
  className: '',
  style: {},
};

export default CLoading;
