/**
 * Created by zhangyi on 2017/11/29.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon'
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
        const { leftContent } = this.props

        if (leftContent) {
            return leftContent
        } else {
            return (
                <Icon type="back"/>
            )
        }
    }

    render() {
        const { prefixCls, className, children, onLeftClick, rightContent } = this.props
        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={`${prefixCls}-wrapper`}>
                <div className={cls}>
                    <div className={`${prefixCls}-left`} onClick={onLeftClick}>
                        { this.renderLeft() }
                    </div>
                    <div className={`${prefixCls}-title`}>
                        { children }
                    </div>
                    <div className={`${prefixCls}-right`}>
                        { rightContent }
                    </div>
                </div>
            </div>
        )
    }
}