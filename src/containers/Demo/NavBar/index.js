/**
 * Created by zhangyi on 2017/11/29.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { NavBar, Icon } from 'yhui'

export default class NavBarDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar rightContent={[<Icon type="search"/>]}>
                    navbar
                </NavBar>
                <NavBar leftContent="back" onLeftClick={()=>{
                    this.showToast('back')
                }}>
                    navbar
                </NavBar>
            </div>
        )
    }
}