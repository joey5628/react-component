import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AppContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showLoading: false,
            showMask: false
        }
    }

    static childContextTypes = {
        showLoading: PropTypes.func,
        hideLoading: PropTypes.func,
        showToast: PropTypes.func
    }

    getChildContext () {
        return {
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            showToast: this.showToast
        }
    }

    showLoading (showMask) {
        console.log('showLoading')
        this.setState({
            showLoading: true,
            showMask: !!showMask
        })
    }

    hideLoading () {
        console.log('hideLoading')
        this.setState({
            showLoading: false,
            showMask: false
        })
    }

    showToast () {
        console.log('show toast')
    }

    render () {
        const {
            showLoading,
            showMask
        } = this.state

        return (
            <section className="app-container">
                {this.props.childrend}
            </section>
        )
    }
}
