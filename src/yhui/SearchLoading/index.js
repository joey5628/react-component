import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './index.less'

export default class SearchLoading extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        prefixCls: 'yh-search-loading',
        text: '搜索中...'
    }

    static propTypes = {
        prefixCls: PropTypes.string
    }

    render() {
        const { prefixCls, text } = this.props

        return (
            <div className={prefixCls}>
                <i className="icon"/>
                <span>{text}</span>
            </div>
        )
    }
}