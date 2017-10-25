/**
 * Created by zhangyi on 2017/10/19.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as globalActions from 'reducers/global/globalActions'
import { YHPage } from 'yhbase'
import { Dialog, Modal, Button } from 'yhui'
import './index.less'

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

class DialogDemo extends YHPage {
    constructor (props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {

    }

    show = () => {
        this.setState({
            visible: true
        })
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    render () {
        return (
            <div>
                <p> demo {this.props.isLoading+''} </p>
                <Button type="primary" inline onClick={this.show}>打开Dialog</Button>
                <Dialog
                    visible={this.state.visible}
                    onClose={this.hide}
                    animation="zoom"
                    maskAnimation="zoom"
                >
                    <div className="modal-demo">
                        <h2>zhangyi model</h2>
                    </div>
                </Dialog>
                {/*<div style={{height: 800+'px', width: 50+'px', backgroundColor: '#cecece'}}></div>*/}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogDemo)
