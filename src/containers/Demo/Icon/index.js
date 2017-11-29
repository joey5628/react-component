/**
 * Created by zhangyi on 2017/11/29.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Icon } from 'yhui'

export default class IconDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Icon/>
                <Icon type="search"/>
                <Icon type="delete-circle"/>
            </div>
        )
    }
}