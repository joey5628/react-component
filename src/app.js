/**
 * Created by zhangyi on 2017/10/19.
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'
import { AppContainer } from 'yhbase'
import 'normalize.css'
import './assets/css/base.less'


render(
    <Provider store={store}>
        <HashRouter>
            <AppContainer/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
