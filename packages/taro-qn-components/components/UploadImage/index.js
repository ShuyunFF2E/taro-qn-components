import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View, Image } from '@tarojs/components';
import CIcon from '../Icon';
import { uuid } from '../../utils/utils';
import './index.less';

class CUploadImage extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    files: PropTypes.array,
    mode: PropTypes.oneOf([
      'scaleToFill',
      'aspectFit',
      'aspectFill',
      'widthFix',
      'top',
      'bottom',
      'center',
      'left',
      'right',
      'top left',
      'top right',
      'bottom left',
      'bottom right',
    ]),
    showAddBtn: PropTypes.bool,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    count: PropTypes.number,
  };

  static defaultProps = {
    style: {},
    className: '',
    files: [],
    mode: 'aspectFill',
    showAddBtn: true,
    multiple: false,
    count: 1,
    onChange: () => {},
  };

  handleRemoveImg = (uid) => {
    let expressArr = this.props.files.filter((item) => item.uid !== uid);
    this.props.onChange(expressArr);
  };

  chooseImage = () => {
    const { files = [], multiple, count, sizeType, sourceType } = this.props;
    const filePathName = 'apFilePaths';
    const params = {};
    if (multiple) {
      params.count = 99;
    }
    if (count) {
      params.count = count;
    }
    if (sizeType) {
      params.sizeType = sizeType;
    }
    if (sourceType) {
      params.sourceType = sourceType;
    }
    my.chooseImage(params)
      .then((res) => {
        const targetFiles = res.tempFilePaths.map((path, i) => ({
          url: path,
          file: res[filePathName][i],
        }));
        const newFiles = files.concat(targetFiles);
        this.props.onChange(newFiles);
      })
      .catch((e) => {
        console.error('e', e);
      });
  };

  render() {
    const { className, style, files, mode, showAddBtn = true } = this.props;
    let newFiles = [...files];
    const rootCls = classnames('cross-upload-image', className);
    newFiles.forEach((item) => (item.uid = uuid()));
    return (
      <View className={rootCls} style={style}>
        <View className="cross-upload-image__flex-item">
          {newFiles.map((item) => (
            <View className="cross-upload-image__item" key={item.uid}>
              <View
                className="cross-upload-image__remove-btn"
                onClick={() => this.handleRemoveImg(item.uid)}
              />
              <Image
                className="cross-upload-image__preview-img"
                mode={mode}
                src={item.url}
              />
            </View>
          ))}
          {showAddBtn && (
            <View
              className="cross-upload-image__item cross-upload-image__choose-btn"
              onClick={this.chooseImage}
            >
              <CIcon type="plus" style={{ color: '#ddd' }} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default CUploadImage;
