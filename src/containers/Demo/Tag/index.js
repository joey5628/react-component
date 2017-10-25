/**
 * Created by zhangyi on 2017/10/25.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Tag } from 'yhui'
import './tagdemo.less'

export default class TagDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        document.body.style.backgroundColor = '#f5f5f9';
    }

    render() {
        return (
            <div className="tag-container">
                <Tag>tag</Tag>
                <Tag type="primary">tag</Tag>
                <br/>
                <Tag closeable>close tag</Tag>
                <Tag type="primary" closeable>close primary</Tag>
            </div>
        )
    }
}
