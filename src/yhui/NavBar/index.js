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
        showClose: false,
        rightContent: '',
        onLeftClick: ()=>{},
        onCloseClick: ()=>{}
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        leftContent: PropTypes.any,
        showClose: PropTypes.bool,
        rightContent: PropTypes.any,
        onLeftClick: PropTypes.func,
        onCloseClick: PropTypes.func
    }

    renderLeft () {
        const { prefixCls, leftContent, onLeftClick, showClose, onCloseClick } = this.props

        if (leftContent) {
            return leftContent
        } else {
            let node = [
                <div key="back" className={`${prefixCls}-left-item`} onClick={onLeftClick}>
                    <Icon type="back"/>
                </div>
            ]
            if (showClose) {
                node.push(
                    <div key="close" className={`${prefixCls}-left-item`} onClick={onCloseClick}>
                        <Icon type="back-home"/>
                    </div>
                )
            }
            return node
        }
    }

    render() {
        const { prefixCls, className, children, rightContent } = this.props
        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={`${prefixCls}-wrapper`}>
                <div className={cls}>
                    <div className={`${prefixCls}-left`}>
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