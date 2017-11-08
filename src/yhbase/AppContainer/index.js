import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from '../../routes'
import {
    Toast
} from 'yhui'

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
        showToast: PropTypes.func,
        history: PropTypes.any
    }

    getChildContext () {
        return {
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            showToast: this.showToast,
            history: this.props.history
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

    showToast = (content) => {
        if(this.refs.toast) {
            this.refs.toast.registerToast(content);
            this.refs.toast.showToast(content);
        }
    }

    render () {
        const {
            showLoading,
            showMask
        } = this.state

        return (
            <section className="app-container">
                {this.props.childrend}
                <Toast ref="toast"/>
                <Routes/>
            </section>
        )
    }
}
