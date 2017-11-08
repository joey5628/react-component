/**
 * router config for v4.2.2
 * Created by zhangyi on 2017/10/19.
 */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from './asyncComponent'

const Demo = asyncComponent(() => import(/* webpackChunkName: "demo" */ '../containers/Demo'));

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Demo}/>
            <Route path="/Demo" component={Demo}/>
        </Switch>
    )
}

// export default function Routes () {
//     return (
//         <Switch>
//             <Route path="/home"  component={async () => {
//                 let Home = await import(/* webpackChunkName: "home" */ '../containers/Home');
//                 Home = Home.default
//                 console.log('home:', Home)
//                 return <Home/>
//             }}/>
//             <Route path="/list"  component={async () => {
//                 let List = await import(/* webpackChunkName: "list" */ '../containers/List');
//                 List = List.default
//                 return <List/>
//             }}/>
//         </Switch>
//     )
// }

