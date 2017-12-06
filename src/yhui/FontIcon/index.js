import React, { PureComponent } from 'react'
import classNames from 'classnames'
import './index.less'

export default class FontIcon extends PureComponent {
    constructor(props) {
        super(props)
        this.colors = ['#24A8E8', '#FFC100', '#FD7622', '#60B800']
    }

    static defaultProps = {
        prefixCls: 'yh-font-icon',
        className: '',
        font: '',
        color: '',
        iconSize: ''
    }

    getColor () {
        let len = this.colors.length
        let num = Math.floor(Math.random()*len)
        return this.colors[num]
    }


    render() {
        const { prefixCls, className, font, color, iconSize } = this.props

        const cls = classNames({
            [prefixCls]: true,
            [className]: className,
            [`${prefixCls}-small`]: iconSize === 'small'
        })

        let newColor = color || this.getColor()

        return (
            <div className={cls} style={{backgroundColor: newColor}}>
                <div className="font-wrapper">
                    <span style={{color: newColor}}>{ font }</span>
                </div>
            </div>
        )
    }
}