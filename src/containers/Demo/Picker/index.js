/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Picker } from 'yhui'

export default class SearchDemo extends YHPage {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div style={{marginTop: 30}}>
                <Picker/>
            </div>
        )
    }
}