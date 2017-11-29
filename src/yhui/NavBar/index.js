/**
 * Created by zhangyi on 2017/11/29.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-navbar',
        className: '',
        leftContent: '',
        rightContent: '',
        onLeftClick: ()=>{}
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        leftContent: PropTypes.any,
        rightContent: PropTypes.any,
        onLeftClick: PropTypes.func
    }

    renderLeft () {
        const { leftContent, onLeftClick } = this.props

        if (leftContent) {

        } else {

        }
    }

    render() {
        const { prefixCls, className, children } = this.props
        const cls = {
            [prefixCls]: true,
            [className]: className
        }

        return (
            <div className={cls}>
                {children}
            </div>
        )
    }
}