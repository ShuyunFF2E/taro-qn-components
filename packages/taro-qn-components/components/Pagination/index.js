import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import CIcon from '../Icon';
import CSelect from '../Select';
import CInput from '../Input';
import cls from 'classnames';

import './index.less';

class CPagination extends Component {
  static propTypes = {
    current: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.array,
    total: PropTypes.number,
    onChange: PropTypes.func,
    showPageSizeOptions: PropTypes.bool,
    showQuickJumper: PropTypes.bool,
  };

  static defaultProps = {
    current: 1,
    pageSize: 10,
    pageSizeOptions: [10, 20, 30, 40],
    total: 0,
    onChange: () => {},
    showPageSizeOptions: false,
    showQuickJumper: false,
  };

  constructor(props) {
    super(props);

    const { pageSize, current, showPageSizeOptions, pageSizeOptions } = props;

    this.state = {
      current,
      pagesLength: 9,
      inputPage: '',
    };

    if (showPageSizeOptions) {
      if (pageSizeOptions.indexOf(pageSize) === -1) {
        pageSizeOptions.push(pageSize);
        pageSizeOptions.sort((a, b) => a - b);
      }
      this.state.pageSizeOptions = pageSizeOptions;
    }
  }

  static getDerivedStateFromProps(props, prevState) {
    const newState = {};
    if (props.current !== prevState.current) {
      newState.current = props.current;
    }
    return newState;
  }

  get totalPage() {
    const { total } = this.props;
    return Math.ceil(total / this.props.pageSize);
  }

  /**
   * 分页总数小于10
   */
  renderLowerPagesLength = (current, pages) => {
    for (let i = 1; i <= this.totalPage; i += 1) {
      pages.push(
        <View
          onClick={() => this.goPage(i)}
          className={cls({
            li: true,
            active: current === i,
          })}
          key={i}
        >
          {i}
        </View>,
      );
    }
  };

  /**
   * 右边显示。。。
   */
  renderRightEllipsePages = (offset, pages, current) => {
    for (let i = 1; i <= offset + 1; i += 1) {
      pages.push(
        <View
          key={i}
          className={cls({
            li: true,
            active: current === i,
          })}
          onClick={() => this.goPage(i)}
        >
          {i}
        </View>,
      );
    }

    pages.push(
      <View
        key="nextMore"
        className={cls({
          li: true,
          ellips: true,
        })}
        onClick={this.nextMore}
      >
        <CIcon type="arrow_dright" className="moreIcon arrow" />
        <CIcon type="point" className="moreIcon point" />
      </View>,
    );
    pages.push(
      <View
        key={this.totalPage}
        className="li"
        onClick={() => this.goPage(this.totalPage)}
      >
        {this.totalPage}
      </View>,
    );
  };

  /**
   * 左边显示。。。
   */
  renderLeftEllipsePages = (offset, pages, current) => {
    pages.push(
      <View key="1" onClick={() => this.goPage(1)} className="li">
        1
      </View>,
    );
    pages.push(
      <View
        key="preMore"
        className={cls({
          li: true,
          ellips: true,
        })}
        onClick={this.preMore}
      >
        <CIcon type="arrow_dleft" className="moreIcon arrow" />
        <CIcon type="point" className="moreIcon point" />
      </View>,
    );

    for (let i = offset; i >= 1; i -= 1) {
      pages.push(
        <View
          key={this.totalPage - i}
          className={cls({
            li: true,
            active: current === this.totalPage - i,
          })}
          onClick={() => this.goPage(this.totalPage - i)}
        >
          {this.totalPage - i}
        </View>,
      );
    }

    pages.push(
      <View
        key={this.totalPage}
        className={cls({
          li: true,
          active: current === this.totalPage,
        })}
        onClick={() => this.goPage(this.totalPage)}
      >
        {this.totalPage}
      </View>,
    );
  };

  /**
   * 左右两侧都显示。。。
   */
  renderBothEllipsePages = (offset, pages, current) => {
    pages.push(
      <View key="1" onClick={() => this.goPage(1)} className="li">
        1
      </View>,
    );
    pages.push(
      <View
        key="preMore"
        className={cls({
          li: true,
          ellips: true,
        })}
        onClick={this.preMore}
      >
        <CIcon type="arrow_dleft" className="moreIcon arrow" />
        <CIcon type="point" className="moreIcon point" />
      </View>,
    );

    for (let i = offset / 2; i >= 0; i -= 1) {
      pages.push(
        <View
          key={current - i}
          className={cls({
            li: true,
            active: current === current - i,
          })}
          onClick={() => this.goPage(current - i)}
        >
          {current - i}
        </View>,
      );
    }

    for (let j = 1; j <= offset / 2; j += 1) {
      pages.push(
        <View
          className="li"
          key={current + j}
          onClick={() => this.goPage(current + j)}
        >
          {current + j}
        </View>,
      );
    }

    pages.push(
      <View
        className={cls({
          li: true,
          ellips: true,
        })}
        onClick={this.nextMore}
      >
        <CIcon type="arrow_dright" className="moreIcon arrow" />
        <CIcon type="point" className="moreIcon point" />
      </View>,
    );
    pages.push(
      <View
        className="li"
        key={this.totalPage}
        onClick={() => this.goPage(this.totalPage)}
      >
        {this.totalPage}
      </View>,
    );
  };

  /**
   * 分页总数大于10
   */
  renderUpperPagesLength = (offset, pages, current) => {
    if (current <= offset) {
      this.renderRightEllipsePages(offset, pages, current);
    } else if (current > this.totalPage - offset) {
      this.renderLeftEllipsePages(offset, pages, current);
    } else {
      this.renderBothEllipsePages(offset, pages, current);
    }
  };

  getPages = () => {
    const { current, pagesLength } = this.state;
    const pages = [];

    if (this.totalPage <= pagesLength) {
      this.renderLowerPagesLength(current, pages);
    } else {
      const offset = (pagesLength - 1) / 2;
      this.renderUpperPagesLength(offset, pages, current);
    }
    return pages;
  };

  goPage = (current) => {
    this.props.onChange(current, this.props.pageSize);
  };

  prevPage = () => {
    let { current } = this.state;
    if (current === 1) return;
    this.goPage((current -= 1));
  };

  nextPage = () => {
    let { current } = this.state;
    if (current + 1 > this.totalPage) return;
    this.goPage((current += 1));
  };

  nextMore = () => {
    let { current } = this.state;
    if (this.totalPage - current > 5) {
      current += 5;
    } else {
      current = this.totalPage - 2;
    }

    this.goPage(current);
  };

  preMore = () => {
    let { current } = this.state;
    if (current > 5) {
      current -= 5;
    } else {
      current = 3;
    }
    this.goPage(current);
  };

  selectPageSize = (event) => {
    console.log('********&', event);
    this.props.onChange(1, parseInt(event.key, 10));
  };

  changePage = (e) => {
    this.setState({
      inputPage: e,
    });
  };

  onBlurPage = () => {
    const { inputPage } = this.state;
    if (!/^[0-9]+$/.test(inputPage)) {
      this.setState({
        inputPage: '',
      });
    }
    if (Number(inputPage) > this.totalPage) {
      this.setState(
        {
          inputPage: '',
        },
        () => {
          this.goPage(this.totalPage);
        },
      );
    } else if (Number(inputPage) < 1) {
      this.setState(
        {
          inputPage: '',
        },
        () => {
          this.goPage(1);
        },
      );
    } else {
      this.setState(
        {
          inputPage: '',
        },
        () => {
          this.goPage(Number(inputPage));
        },
      );
    }
  };

  render() {
    const {
      showPageSizeOptions,
      style,
      current,
      pageSizeOptions,
      showQuickJumper,
    } = this.props;
    const pageSizeOptionsData = pageSizeOptions.map((item) => {
      return { value: `${item}条/页`, key: item };
    });
    return (
      <View className="cross-pagination" style={style}>
        <View className="ul">
          <View
            onClick={this.prevPage}
            className={cls({
              li: true,
              nomore: current === 1,
            })}
          >
            <CIcon type="arrow_left" className="pg-icon"></CIcon>
          </View>
          {this.getPages()}
          <View
            onClick={this.nextPage}
            className={cls({
              li: true,
              nomore: current === this.totalPage,
            })}
          >
            <CIcon type="arrow_right" className="pg-icon"></CIcon>
          </View>
        </View>
        {showPageSizeOptions && (
          <CSelect
            options={pageSizeOptionsData}
            onChange={this.selectPageSize}
            defaultValue={pageSizeOptionsData[0].key}
            size="small"
            style={{ width: '80px' }}
          />
        )}
        {showQuickJumper && (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '8px',
              flex: 1,
            }}
          >
            <Text>跳转到</Text>
            <CInput
              style={{
                width: '50px',
                height: '28px',
                margin: '0 8px',
              }}
              value={this.state.inputPage}
              onChange={this.changePage}
              onBlur={this.onBlurPage}
            />
            <Text>页</Text>
          </View>
        )}
      </View>
    );
  }
}

export default CPagination;
