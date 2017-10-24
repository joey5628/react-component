/**
 * Created by zhangyi on 2017/10/24.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash/array';
import Animation from '../Animation'
import './index.less'

export default class Toast extends Component {
    constructor(props) {
        super()
        this.state = {
          visible: false,
          // closed: true,
          content: '',
        };
        this.toasts = [];
        this.isOpen = false;
    }

    static defaultProps = {
        content: 'Toast',
        timeout: 2000
    }

    static propTypes = {
        content: PropTypes.string,
        timeout: PropTypes.number
    }

    autoHideToast() {
        setTimeout(() => {
            this.setState({visible: false});
            this.animationEnd()
            // TODO 考虑是否引入rc-animate库 触发动画完成方法
            // setTimeout(() => {
            //     this.animationEnd()
            // }, 500)
        }, this.props.timeout);
    }

    registerToast(content) {
        this.toasts.push(content);
    }

    showToast() {
        if (this.isOpen)
            return;
        this.isOpen = true;
        this.setState({
            // closed: false,
            visible: true,
            content: this.toasts[0]
        });
        this.autoHideToast();
    }

    animationEnd() {
        this.toasts = _.drop(this.toasts);
        this.isOpen = false;
        // setTimeout(() => {
        //     this.setState({
        //         visible: false
        //     });
        // }, 200);
        console.log('toasts:', this.toasts.length)
        if (this.toasts.length > 0) {
            setTimeout(() => {
                this.showToast();
            }, 400);
        }
    }

    disableNativeTouch(e) {
        e.preventDefault();
    }

    render() {
        const {
            content,
            visible
        } = this.state
        const toastClass = classNames('toast');
        let node = null
        if (visible) {
            node = (
                <div className="toast" data-show={this.state.visible} onTouchMove={this.disableNativeTouch}>
                    {content}
                </div>
            )
        }
        return (
            <Animation
                ref="toast-animation"
                key="toast-animation"
                transitionName="yh-fade"
                transitionEnterTimeout={500}
                transitionAppearTimeout={500}
                transitionLeaveTimeout={500}
            >
                {node}
            </Animation>
        )
    }
}
