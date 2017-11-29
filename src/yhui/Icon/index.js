/**
 * Created by zhangyi on 2017/11/29.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import './index.less'

export default class Icon extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yhicon',
        type: 'back',
        size: '',
        color: ''
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string
    }

    render() {
        const { prefixCls, type, size, color } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${size}`]: size
        })

        return (
            <span className={cls} style={{color: color}}/>
        )
    }
}