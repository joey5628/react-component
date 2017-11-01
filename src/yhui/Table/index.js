/**
 * Created by zhangyi on 2017/11/1.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

export default class Table extends PureComponent {
    constructor(props) {
        super(props)
        console.log('this.props:', this.props)
    }

    static defaultProps = {
        prefixCls: 'yh-table',
        className: '',
        style: null,
        columns: [],
        data: [],
        title: '',
        showHeader: true,
        scrollX: true,
        width: 'auto'
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        columns: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            dataIndex: PropTypes.string,
            title: PropTypes.string,
            className: PropTypes.string,
            width: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ])
        })),
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }

    // 渲染表头
    renderColumn(columns) {
        let thDom = columns.map((cur) => {
            return (
                <th
                    key={cur.key || cur.dataIndex}
                    className={cur.className}
                    style={{width: cur.width}}>
                    {cur.title}
                </th>
            )
        })
        return (
            <thead>
                <tr>
                    { thDom }
                </tr>
            </thead>
        )
    }

    renderBody (columns, data) {
        return (
            <tbody>
            {
                data.map((cur, i) => {
                    return (
                        <tr key={`tr_${i}`}>
                            {
                                columns.map((column, j)=>{
                                    let key = column.key
                                    return (
                                        <td
                                            key={`td_${j}`}>
                                            { cur[key] }
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        )
    }

    render() {
        const {
            prefixCls, className, style, showHeader, data, columns, scrollX, width
        } = this.props

        if (!columns || columns.length === 0) {
            return null
        }

        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className
        })

        const wrapSty = {
            ...style,
            // overflowX: scrollX ? 'scroll' : 'hidden'
        }

        console.log('width:', width)

        return (
            <div className={wrapCls} style={wrapSty}>
                <table className={`${prefixCls}-table`} style={{width: width}}>
                    { showHeader ? this.renderColumn(columns) : null }
                    { data && data.length > 0 ? this.renderBody(columns, data) : null }
                </table>
            </div>
        )
    }
}