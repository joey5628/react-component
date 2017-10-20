/**
 * Created by zhangyi on 2017/10/18.
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from "react-router";
import routes from './routes/index-v3'
// import { Provider } from 'react-redux'
// import store from './store'
import './assets/css/base.less'

render(
    <Router  history={hashHistory} routes={routes}/>,
    document.getElementById('app')
);