/**
 * Created by zhangyi on 2017/10/19.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as globalActions from 'reducers/global/globalActions'
import { YHPage } from 'yhbase'
import { Dialog, Modal, alert } from 'yhui'
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

class Demo extends YHPage {
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

    openAlert = () => {
        alert('提示', '你确定吗？', [
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
        ])
    }

    openToast = () => {
        this.showToast('这是一个toast11111')
        this.showToast('22222')
    }

    render () {
        return (
            <div>
                <p> demo {this.props.isLoading+''} </p>
                <button type="button" className="btn" onClick={this.show}>打开Modal</button>
                <button type="button" className="btn" onClick={this.openAlert}>打开Alert</button>
                <button type="button" className="btn" onClick={this.openToast}>打开Toast</button>
                <Modal
                    visible={this.state.visible}
                    maskCloseable={false}
                    onClose={this.hide}
                    title="Title"
                    footer={[{text: '确定', onPress: ()=>{
                        console.log('onPress ')
                        this.hide()
                    }}]}
                >
                    <div>
                        <h1>zhangyisdkkkk</h1>
                    </div>
                </Modal>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
