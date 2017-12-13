import React, { Component } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import NavBar from '../NavBar'
import TabBar from '../TabBar'
import './index.less'

export default class HeaderTabBar extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-header-tab',
        className: '',
        title: '',

        // navbar
        leftContent: '',
        rightContent: '',
        showClose: false,
        onLeftClick: ()=>{},
        onCloseClick: ()=>{},

        // tabbar
        tabItems: [],
        defaultActiveIndex: 0,
        barTintColor: 'transparent',
        underline: false,
        tintColor: '#fff',
        unselectedTintColor: 'rgba(255, 255, 255, .5)',
        // tintColor: '#fff',
        onChange: ()=>{}
    }

    render() {
        const {
            prefixCls, className, title,
            leftContent, rightContent, onLeftClick, onCloseClick, showClose,
            tabItems, barTintColor, defaultActiveIndex, onChange, underline,
            tintColor, unselectedTintColor
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={cls}>
                <div className={`${prefixCls}-inner`}>
                    <NavBar
                        showClose={showClose}
                        leftContent={leftContent}
                        rightContent={rightContent}
                        onLeftClick={onLeftClick}
                        onCloseClick={onCloseClick}
                     >
                        {title}
                    </NavBar>
                    <TabBar
                        items={tabItems}
                        barTintColor={barTintColor}
                        defaultActiveIndex={defaultActiveIndex}
                        underline={underline}
                        tintColor={tintColor}
                        unselectedTintColor={unselectedTintColor}
                        onChange={onChange}
                    />
                </div>
            </div>
        )
    }
}