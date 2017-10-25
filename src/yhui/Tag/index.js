/**
 * Created by zhangyi on 2017/10/25.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

export default class Tag extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-tag',
        className: '',
        style: null,
        type: '',
        onClick: ()=>{},
        closeable: false,
        onClose: ()=>{}
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
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
            prefixCls, children, className, type, closeable
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-primary`]: type === 'primary'
        })

        const closeCls = classNames({
            'yhicon-global-close': true,
            'show-close': closeable
        })

        return (
            <div className={cls} onClick={this.onClick}>
                <span>{children}</span>
                <i className={closeCls}/>
            </div>
        )
    }
}
