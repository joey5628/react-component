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
                <input type="text" className="input" placeholder="search"/>
                <br/>
                <br/>
                <input type="number" className="input" placeholder="number"/>
                <br/>
                <input type="number" pattern="[0-9]*" className="input" placeholder="[0-9]*"/>
                <br/>
                <input type="tel" className="input" placeholder="tel"/>
            </div>
        )
    }
}