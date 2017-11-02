/**
 * Created by zhangyi on 2017/11/1.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import PickerColumn from './PickerColumn'
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

    renderColumn () {
        let {
            prefixCls, options, value, onChange
        } = this.props

        value = value || []

        let colNodes = null
        if (!_.isArray(options[0])) {
            colNodes = (
                <PickerColumn
                    prefixCls={prefixCls}
                    key="0"
                    options={options}
                    value={value}
                    onChange={(selected) => {
                        onChange(selected)
                    }}/>
            )
        } else {
            colNodes = options.map((cur, index) => {
                return (
                    <PickerColumn
                        prefixCls={prefixCls}
                        key={index}
                        options={cur}
                        value={value[index]}
                        onChange={(selected) => {
                            value[index] = selected
                            onChange(value)
                        }}/>
                )
            })
        }

        return colNodes
    }

    render() {
        const {
            prefixCls, className, style, options
        } = this.props

        if (!options || options.length === 0) {
            return null
        }

        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={wrapCls} style={style}>
                { this.renderHeader() }
                <div className={`${prefixCls}-wrapper`}>
                    { this.renderColumn() }
                </div>
            </div>
        )
    }
}