import React, { PureComponent } from 'react'
import classNames from 'classnames'
import './index.less'

export default class PopupHeader extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-popup-header',
        className: '',
        leftContent: '取消',
        leftStyle: null,
        onLeftClick: ()=>{},
        title: '审批语',
        rightContent: '确定',
        rightStyle: null,
        onRightClick: ()=>{}
    }

    render() {
        const {
            prefixCls, leftContent, leftStyle, onLeftClick, title, rightContent, rightStyle, onRightClick, className
        } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        return (
            <div className={cls}>
                <a  style={leftStyle}
                    className={`${prefixCls}-left`}
                    onClick={onLeftClick}>
                    { leftContent }
                </a>
                <div className={`${prefixCls}-title`}>{ title }</div>
                <a  style={rightStyle}
                    className={`${prefixCls}-right`}
                    onClick={onRightClick}>
                    { rightContent }
                </a>
            </div>
        )
    }
}