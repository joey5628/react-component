/**
 * Created by zhangyi on 2017/10/31.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

export default class PullToRefresh extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-pull-refresh',
        className: '',
        style: null,
        height: '',
        distanceToRefresh: 100,
        distanceLoadMore: 50,
        onRefresh: ()=>{},
        onLoadMore: ()=>{},
        footer: null,
        loading: false,         //状态
        hosMore: true,
    }

    onScroll = (e) => {
        let element = e.target
        setTimeout(() => {
            const { distanceLoadMore, onLoadMore } = this.props
            let {
                offsetHeight, scrollTop, scrollHeight
            } = element

            if (scrollTop + offsetHeight + distanceLoadMore >= scrollHeight && onLoadMore) {
                onLoadMore()
            }
        }, 100)
    }

    renderFooter() {
        const {
            loading, hasMore, prefixCls
        } = this.props

        if (!hasMore) {
            return (
                <div className={`${prefixCls}-footer`}>
                    <span>没有更多了</span>
                </div>
            )
        }
        if (loading) {
            return (
                <div className={`${prefixCls}-footer`}>
                    <span>loading...</span>
                </div>
            )
        }
    }

    render() {
        const {
            prefixCls, className, children, style, height
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        const sty = {
            ...style,
            height
        }

        return (
            <div
                className={cls}
                style={sty}
                onScroll={this.onScroll}>
                <div className={`${prefixCls}-wrap`} ref="wrap">
                    <div className={`${prefixCls}-content`}>
                        {children}
                    </div>
                    { this.renderFooter() }
                </div>
            </div>
        )
    }
}