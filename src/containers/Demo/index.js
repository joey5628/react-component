/**
 * Created by zhangyi on 2017/10/19.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as globalActions from 'reducers/global/globalActions'
import { YHPage } from 'yhbase'

function mapStateToProps (store) {
    return {
        isLoading: store.global.isLoading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(globalActions, dispatch)
    }
}

class Demo extends YHPage {
    constructor (props) {
        super(props)
    }

    componentDidMount() {

    }

    render () {
        console.log('this.props', this.props)
        return (
            <div>
                <p> demo {this.props.isLoading+''} </p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)

