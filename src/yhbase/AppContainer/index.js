import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from 'routes'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as globalActions from 'reducers/global/globalActions'
import {
    Toast,
    Loading,
    NavBar
} from 'yhui'

function mapStateToProps(state) {
    return {
        toast: state.global.toast,
        isLoading: state.global.loading.isLoading,
        showMask: state.global.loading.showMask
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
            showMask: true,
            navbar: null
        }
    }

    static childContextTypes = {
        showLoading: PropTypes.func,
        hideLoading: PropTypes.func,
        showToast: PropTypes.func,
        history: PropTypes.any,
        setHeader: PropTypes.func
    }

    getChildContext () {
        return {
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            showToast: this.showToast,
            history: this.props.history,
            setHeader: this.setHeader
        }
    }

    componentWillReceiveProps (nextProps) {
        const {
            isLoading,
            toast,
            showMask
        } = nextProps
        if(toast.time !== this.props.toast.time && !!toast.content) {
            this.showToast(toast.content);
        }

        if (isLoading) {
            this.showLoading(showMask)
        } else {
            this.hideLoading(showMask)
        }
    }

    showLoading = (showMask) => {
        this.props.actions.updateLoading({
            isLoading: true,
            showMask
        })
    }

    hideLoading = () => {
        this.props.actions.updateLoading({
            isLoading: false,
            showMask: false
        })
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

    setHeader = (options) => {
        if(_.isString(options)) {
            this.setState({
                navbar: {
                    title: options
                }
            })
        } else if (_.isObject(options)) {
            this.setState({
                navbar: options
            })
        }
    }

    back = () => {
        this.props.history.goBack()
    }

    render () {
        const {
            isLoading,
            showMask
        } = this.props

        console.log('this.props', this.props)

        const { navbar } = this.state

        const navbarTitle = navbar ? navbar.title : ''

        return (
            <section className="app-container">
                {this.props.childrend}
                <Toast ref="toast"/>
                <Loading showLoading={isLoading} showMask={showMask}/>
                {
                    navbar && <NavBar
                        {...navbar}
                        onLeftClick={this.back}
                        >
                        { navbarTitle }
                    </NavBar>
                }
                <Routes/>
            </section>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer))
