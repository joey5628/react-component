/**
 * Created by zhangyi on 2017/10/18.
 */
import React from 'react'
import { YHPage } from 'yhbase'

export default class Home extends YHPage {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h3>Home</h3>
                <p> API_URL: { API_URL } </p>
            </div>
        )
    }
}
