/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import './index.less'

export default class Input extends YHPage {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="focus隐藏placeholder"/>
                <br/>
                <br/>
                <input type="number" className="input" placeholder="number"/>
                <br/>
                <input type="number" pattern="[0-9]*" className="input" placeholder="[0-9]*"/>
                <br/>
                <input type="tel" className="input" placeholder="tel"/>
                <br/>
                <div className="file-area">
                    <p>默认file样式</p>
                    <input id="uploadFile" type="file" multiple accept="image/*" onChange={this.onChange}/>
                    <br/>
                    <p style={{marginTop: 15}}>把input[file]的opacity设为0，label的for属性设置为input[file]的ID</p>
                    <div className="btn-upload">
                        <label htmlFor="uploadFile">上传图片</label>
                    </div>

                    <p style={{marginTop: 15}}>把input display设为none，点击其他元素触发input的click事件</p>
                    <div className="input-append">
                        <input ref="leftFile" type="file" multiple accept="image/*" style={{display: 'none'}}/>
                        <a className="btn" onClick={()=>{
                            this.refs.leftFile.click()
                        }}>Browse</a>
                    </div>
                </div>
            </div>
        )
    }
}