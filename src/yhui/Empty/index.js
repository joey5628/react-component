import React, { PureComponent } from 'react'
import './index.less'

export default class Empty extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        text: '抱歉，没有找到相关结果'
    }


    render() {
        const { text } = this.props

        return (
            <div className="empty">
                <img src={require('./imgs/empty.png')} alt=""/>
                <p>{ text }</p>
            </div>
        )
    }
}