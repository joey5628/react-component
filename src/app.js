/**
 * Created by zhangyi on 2017/10/19.
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'
import Routes from './routes'

import './assets/css/base.less'


render(
    <Provider store={store}>
        <HashRouter>
            <Routes/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
