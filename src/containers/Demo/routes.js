/**
 * Created by zhangyi on 2017/11/8.
 */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from 'routes/asyncComponent'

const DemoList = asyncComponent(() => import(/* webpackChunkName: "demo" */ './DemoList'));

const Dialog = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Dialog'));
const Modal = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Modal'));
const Button = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Button'));
const SearchBar = asyncComponent(() => import(/* webpackChunkName: "demo" */ './SearchBar'));
const Tag = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Tag'));
const SwipeAction = asyncComponent(() => import(/* webpackChunkName: "demo" */ './SwipeAction'));
const TabBar = asyncComponent(() => import(/* webpackChunkName: "demo" */ './TabBar'));
const PullToRefresh = asyncComponent(() => import(/* webpackChunkName: "demo" */ './PullToRefresh'));
const Badge = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Badge'));
const Table = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Table'));
const Input = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Input'));
const Picker = asyncComponent(() => import(/* webpackChunkName: "demo" */ './Picker'));
const UploadFile = asyncComponent(() => import(/* webpackChunkName: "demo" */ './UploadFile'));


const routes = [{
    path: '/',
    component: DemoList
}, {
    path: '/SearchBar',
    component: SearchBar,
    name: 'SearchBar'
}, {
    path: '/SwipeAction',
    component: SwipeAction,
    name: 'SwipeAction 左右滑动操作'
}, {
    path: '/Picker',
    component: Picker,
    name: 'Picker'
}, {
    path: '/TabBar',
    component: TabBar,
    name: 'TabBar'
}, {
    path: '/Badge',
    component: Badge,
    name: 'Badge'
}, {
    path: '/Modal',
    component: Modal,
    name: 'Modal'
}, {
    path: '/dialog',
    component: Dialog,
    name: '基础弹窗'
}, {
    path: '/Button',
    component: Button,
    name: 'Button'
}, {
    path: '/Tag',
    component: Tag,
    name: 'Tag'
}, {
    path: '/PullToRefresh',
    component: PullToRefresh,
    name: 'PullToRefresh'
}, {
    path: '/Table',
    component: Table,
    name: 'Table'
}, {
    path: '/Input',
    component: Input,
    name: 'Input'
}, {
    path: '/UploadFile',
    component: UploadFile,
    name: 'UploadFile'
}]

export default routes

// export default function DemoRoutes() {
//     const match = arguments[0]
//
//     return (
//         <Switch>
//             <Route exact path={`${match.path}/`} component={DemoList}/>
//             <Route path={`${match.path}/dialog`} component={Dialog}/>
//             <Route path={`${match.path}/modal`} component={Modal}/>
//             <Route path={`${match.path}/button`} component={Button}/>
//             <Route path={`${match.path}/searchbar`} component={SearchBar}/>
//             <Route path={`${match.path}/tag`} component={Tag}/>
//             <Route path={`${match.path}/swipeaction`} component={SwipeAction}/>
//             <Route path={`${match.path}/tabbar`} component={TabBar}/>
//             <Route path={`${match.path}/PullToRefresh`} component={PullToRefresh}/>
//             <Route path={`${match.path}/Badge`} component={Badge}/>
//             <Route path={`${match.path}/Table`} component={Table}/>
//             <Route path={`${match.path}/Input`} component={Input}/>
//             <Route path={`${match.path}/Picker`} component={Picker}/>
//         </Switch>
//     )
// }
