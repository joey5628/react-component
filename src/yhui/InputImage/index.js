/**
 * Created by zhangyi on 2017/11/15.
 * html5 选择图片并压缩
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

export default class InputImage extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-input-image',
        compress: true,
        className: '',
        style: null,
        onChange: ()=>{},
        maxWidth: 400,
        maxHeight: 400,
        fileType: 'blob',
        imageType: 'image/png'
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        compress: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        onChange: PropTypes.func,
        maxWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        fileType: PropTypes.oneOf(['base64', 'blob']),     // 返回压缩后的的文件类型
        imageType: PropTypes.string      // 指定返回的图片格式
    }


    compress = (res) => {
        // console.log('res:', res)
        let { maxWidth, maxHeight, fileType, imageType } = this.props

        // imageType = `image/${imageType}`

        return new Promise(function (resolve, reject) {
            const img = new Image()

            img.onload = function() {
                let originWidth = this.width, originHeight = this.height

                let canvas = document.createElement('canvas');
                let context = canvas.getContext('2d');

                let targetWidth = originWidth, targetHeight = originHeight;
                // 图片尺寸超过400x400的限制
                if (originWidth > maxWidth || originHeight > maxHeight) {
                    if (originWidth / originHeight > maxWidth / maxHeight) {
                        // 更宽，按照宽度限定尺寸
                        targetWidth = maxWidth;
                        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                    } else {
                        targetHeight = maxHeight;
                        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                    }
                }

                // canvas对图片进行缩放
                canvas.width = targetWidth;
                canvas.height = targetHeight;

                // 清除画布
                context.clearRect(0, 0, targetWidth, targetHeight);
                // 图片压缩
                context.drawImage(img, 0, 0, targetWidth, targetHeight);

                if (fileType === 'base64') {
                    // 获取base64格式信息
                    const dataUrl = canvas.toDataURL(imageType);
                    resolve(dataUrl)
                } else {
                    // 把canvas转化为blob二进制文件
                    if (canvas.toBlob) {
                        canvas.toBlob(function(blob) {
                            resolve(blob)
                        }, imageType)
                    } else { // ios 不支持toB
                        let data = canvas.toDataURL(imageType);
                        //dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
                        data = data.split(',')[1];
                        data = window.atob(data);
                        let ia = new Uint8Array(data.length);
                        for (let i = 0; i < data.length; i++) {
                            ia[i] = data.charCodeAt(i);
                        }
                        //canvas.toDataURL 返回的默认格式就是 image/png
                        let blob = new Blob([ia], {
                            type: imageType
                        });
                        resolve(blob)
                    }
                }
            }

            img.onerror = function() {
                reject(new Error('图片加载失败'))
            }

            img.src = res;
        });
    }

    // 读取文件并转化为base64
    fileReader = (file) => {
        console.log('file:', file)
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();

            reader.onload = (e) => {
                resolve(e.target.result)
            };

            reader.onerror = reject

            reader.readAsDataURL(file);
        })
    }

    onChange = async (e) => {
        const { onChange, compress } = this.props
        let files = e.target.files
        const len = files.length
        console.log('files:', files)
        let newFiles = []

        if (compress) {
            for(let i = 0; i < len; i++) {
                const result = await this.fileReader(files[i])
                const data = await this.compress(result)
                // console.log('data:', data)
                newFiles.push(data)
            }
        }

        console.log('newFiles:', newFiles)
        onChange && onChange({
            files,
            newFiles
        })
    }

    render() {
        const {
            prefixCls, className, children, style
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div
                className={cls}
                style={style}
                onClick={() => {
                    this.refs.inputFile.click()
                }}>
                <input ref="inputFile" type="file" multiple accept="image/*" onChange={this.onChange}/>
                { children }
            </div>
        )
    }
}