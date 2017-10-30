/**
 * Created by zhangyi on 2017/10/30.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { TabBar } from 'yhui'

export default class TabBarDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div style={{marginTop: 20}}>
                <TabBar items={['first tab', 'second tab', 'third tab']} style={{marginBottom: 20}}/>
                <TabBar items={['first tab', 'second tab', 'third tab']} defaultActiveIndex={1} style={{marginBottom: 20}}/>
                <TabBar items={['first tab', 'second tab', 'third tab']} barTintColor="#ddd" tintColor="red"/>
            </div>
        )
    }
}