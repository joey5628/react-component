import React, { PureComponent } from 'react'
import './index.less'

export default class PopupHeader extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        cls: 'yh-popup-header',
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
            cls, leftContent, leftStyle, onLeftClick, title, rightContent, rightStyle, onRightClick
        } = this.props

        return (
            <div className={cls}>
                <a  style={leftStyle}
                    className={`${cls}-left`}
                    onClick={onLeftClick}>
                    { leftContent }
                </a>
                <div className={`${cls}-title`}>{ title }</div>
                <a  style={rightStyle}
                    className={`${cls}-right`}
                    onClick={onRightClick}>
                    { rightContent }
                </a>
            </div>
        )
    }
}