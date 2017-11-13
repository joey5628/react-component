import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from 'routes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as globalActions from 'reducers/global/globalActions'
import {
    Toast,
    Loading
} from 'yhui'

function mapStateToProps(state) {
    return {
        toast: state.global.toast,
        isLoading: state.global.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(globalActions, dispatch)
    }
}

class AppContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showLoading: false,
            showMask: true
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

    componentWillReceiveProps (nextProps) {
        const {
            isLoading,
            toast
        } = nextProps
        if(toast.time !== this.props.toast.time && !!toast.content) {
            this.showToast(toast.content);
        }

        if (isLoading) {
            this.showLoading()
        } else {
            this.hideLoading()
        }
    }

    showLoading = () => {
        this.props.actions.updateLoading(true)
    }

    hideLoading = () => {
        this.props.actions.updateLoading(false)
    }

    /*showLoading = (showMask) => {
        console.log('showLoading')
        this.setState({
            showLoading: true,
            showMask: !!showMask
        })
    }

    hideLoading = () => {
        console.log('hideLoading')
        this.setState({
            showLoading: false,
            showMask: false
        })
    }*/

    showToast = (content) => {
        if(this.refs.toast) {
            this.refs.toast.registerToast(content);
            this.refs.toast.showToast(content);
        }
    }

    render () {
        const {
            isLoading,
        } = this.props

        return (
            <section className="app-container">
                {this.props.childrend}
                <Toast ref="toast"/>
                <Loading showLoading={isLoading} showMask={true}/>
                <Routes/>
            </section>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer))
