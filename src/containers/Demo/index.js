/**
 * Created by zhangyi on 2017/10/23.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { YHPage } from 'yhbase'
import asyncComponent from '../../routes/asyncComponent'
const Dialog = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Dialog'));
const Modal = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Modal'));
const ButtonDemo = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Button'));


export default class Demo extends YHPage {
    constructor (props) {
        super(props)
    }

    render() {
        const { match } = this.props
        // console.log('match:', match)
        return (
            <div>
                <h2>Demo</h2>
                <Switch>
                    <Route path={`${match.path}/dialog`} component={Dialog}/>
                    <Route path={`${match.path}/modal`} component={Modal}/>
                    <Route path={`${match.path}/button`} component={ButtonDemo}/>
                </Switch>
            </div>
        )
    }
}
