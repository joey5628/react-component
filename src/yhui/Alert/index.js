/**
 * Created by zhangyi on 2017/10/23.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../Modal'

export default function alert(...args) {
    const title = args[0]
    const content = args[1]
    const actions = args[2] || [{text: '确定'}]
    const prefixCls = 'yh-modal'

    if(!title && !content) {
        return {
            close: () => {}
        }
    }

    let div = document.createElement('div')
    document.body.appendChild(div)

    function close() {
        const maskDom = div.querySelector(`.${prefixCls}-mask`)
        const wrapDom = div.querySelector(`.${prefixCls}-wrap`)

        // 直接移除dom不会有动画，需要先添加关闭动画，在移除dom
        maskDom.classList.add('yh-fade-leave', 'yh-fade-leave-active')
        wrapDom.classList.add('yh-zoom-leave', 'yh-zoom-leave-active')

        setTimeout(()=>{
            ReactDOM.unmountComponentAtNode(div)
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }, 210)
    }

    const footer = actions.map((btn) => {
        const orginPress = btn.onPress || function() {};
        btn.onPress = () => {
            const res = orginPress()
            if (res && res.then) {
                res.then(() => {
                    close()
                })
            } else {
                close()
            }
        }
        return btn;
    })

    ReactDOM.render(
        <Modal
            visible
            prefixCls={prefixCls}
            title={title}
            maskClosable={false}
            animation="zoom"
            maskAnimation="fade"
            footer={footer}
        >
            <div style={{zoom: 1, overflow: 'hidden'}}>{content}</div>
        </Modal>,
        div
    );

    return {
        close
    };
}
