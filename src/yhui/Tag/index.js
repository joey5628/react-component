/**
 * Created by zhangyi on 2017/10/25.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'
import Icon from '../Icon'

export default class Tag extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-tag',
        className: '',
        size: 'default',
        style: null,
        type: '',
        onClick: ()=>{},
        closeable: false,
        onClose: ()=>{}
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.string,
        onClick: PropTypes.func,
        closeable: PropTypes.bool,
        onClose: PropTypes.func
    }

    onClick = (e) => {
        e.preventDefault()
        if (this.props.onClick) {
            this.props.onClick()
        }
    }



    render () {
        const {
            prefixCls, children, className, type, closeable, size, onClose
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${size}`]: size
        })

        const closeCls = classNames({
            [`${prefixCls}-close`]: true,
            'show-close': closeable
        })

        return (
            <div className={cls} onClick={this.onClick}>
                <span>{children}</span>
                <div
                    className={`${prefixCls}-close-wrapper`}
                    onClick={(e)=>{
                        onClose()
                        e.stopPropagation()
                    }}>
                    <Icon className={closeCls} type="delete-mini" on/>
                </div>
            </div>
        )
    }
}
