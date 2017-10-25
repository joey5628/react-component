/**
 * Created by zhangyi on 2017/10/23.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { YHPage } from 'yhbase'
import './demo.less'
import asyncComponent from '../../routes/asyncComponent'
const Dialog = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Dialog'));
const Modal = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Modal'));
const ButtonDemo = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Button'));
const SearchBar = asyncComponent(() => import(/* webpackChunkName: "demo" */ './SearchBar'));
const Tag = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Tag'));


export default class Demo extends YHPage {
    constructor (props) {
        super(props)
    }

    render() {
        const { match } = this.props
        console.log(this.props)
        // console.log('match:', match)
        let pathname = this.props.location.pathname
        let demo = pathname.split('/')[2]

        return (
            <div>
                <div className="demoName">
                {demo}
                </div>
                <Switch>
                    <Route path={`${match.path}/dialog`} component={Dialog}/>
                    <Route path={`${match.path}/modal`} component={Modal}/>
                    <Route path={`${match.path}/button`} component={ButtonDemo}/>
                    <Route path={`${match.path}/searchbar`} component={SearchBar}/>
                    <Route path={`${match.path}/tag`} component={Tag}/>
                </Switch>
            </div>
        )
    }
}
