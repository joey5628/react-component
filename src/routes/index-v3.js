/**
 * react-router config for v3.2
 * Created by zhangyi on 2017/10/18.
 */
import React from 'react'
import { Route } from 'react-router'

export default (
    <Route>
        <Route path="/home" getComponent={async (nextState, cb) => {
            const Home = await import(/* webpackChunkName: "home" */ '../containers/Home');
            cb(null, Home.default)
        }}/>
        <Route path="/list" getComponent={async (nextState, cb) => {
            const List = await import(/* webpackChunkName: "list" */ '../containers/List');
            cb(null, List.default)
        }} />
    </Route>
)