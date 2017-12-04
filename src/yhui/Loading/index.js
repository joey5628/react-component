/**
 * Created by zhangyi on 2017/11/13.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dialog from '../Dialog'
import './index.less'

export default class Loading extends PureComponent {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        showLoading: false,
        showMask: false
    }

    static propTypes = {
        showLoading: PropTypes.bool,
        showMask: PropTypes.bool,
    }

    render() {
        const { showLoading, showMask } = this.props

        const wrapSty = !showMask ? {
            boxShadow: '0 0 15px #aaa'
        } : null

        return (
            <Dialog
                visible={showLoading}
                mask={showMask}
                animation="fade"
                maskAnimation="fade">
                <div className="loading-wrapper" style={wrapSty}>
                    <img src={require("./imgs/loading.gif")} auto=""></img>
                </div>
            </Dialog>
        )
    }
}