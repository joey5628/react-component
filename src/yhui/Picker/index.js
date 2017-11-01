/**
 * Created by zhangyi on 2017/11/1.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

function noop () {}

export default class Picker extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-picker',
        className: '',
        style: null,
        options: [],
        value: [],
        onChange: noop,
        onOk: noop,
        onDismiss: noop,
        title: '',
        okText: '确定',
        dismissText: '取消'
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        options: PropTypes.array,
        value: PropTypes.array,
        onChange: PropTypes.func,
        onOk: PropTypes.func,
        onDismiss: PropTypes.func,
        title: PropTypes.string,
        okText: PropTypes.string,
        dismissText: PropTypes.string
    }

    renderHeader() {
        const {
            prefixCls, okText, dismissText, onOk, onDismiss, title
        } = this.props

        return (
            <div className={`${prefixCls}-header`}>
                {
                    dismissText ?
                        <div
                            className={`${prefixCls}-header-item ${prefixCls}-header-left`} onClick={onDismiss}>
                            {dismissText}
                        </div> : null
                }
                <div className={`${prefixCls}-header-item ${prefixCls}-header-title`}>
                    { title }
                </div>
                <div className={`${prefixCls}-header-item ${prefixCls}-header-right`} onClick={onOk}>
                    { okText }
                </div>
            </div>
        )
    }

    render() {
        const {
            prefixCls, className, style
        } = this.props

        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={wrapCls} style={style}>
                { this.renderHeader() }

                <div className={`${prefixCls}-inner`}>
                    <div className={`${prefixCls}-mask`}/>
                    <div className={`${prefixCls}-indicator`}/>
                    <div className={`${prefixCls}-col`}>
                        <div className={`${prefixCls}-col-content`}>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item ${prefixCls}-col-item-selected`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                        </div>
                    </div>
                    <div className={`${prefixCls}-col`}>
                        <div className={`${prefixCls}-col-content`}>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                            <div className={`${prefixCls}-col-item`}>安徽省</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}