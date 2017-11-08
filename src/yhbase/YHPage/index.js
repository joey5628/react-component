/**
 * Created by zhangyi on 2017/10/18.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class YHPage extends Component {
    constructor(props) {
        super(props)
    }

    static contextTypes = {
        showLoading: PropTypes.func,
        hideLoading: PropTypes.func,
        showToast: PropTypes.func,
        history: PropTypes.any
    }

    showLoading(showMask) {
        const {
            showLoading
        } = this.context;
        showLoading && showLoading(showMask);
    }

    hideLoading() {
        const {
            hideLoading
        } = this.context;
        hideLoading && hideLoading();
    }

    showToast(content) {
        const {
            showToast
        } = this.context
        showToast && showToast(content)
    }
}
