/**
 * Created by zhangyi on 2017/10/19.
 */
const {
    GLOBAL_UPDATE_LOADING,
    GLOBAL_UPDATE_TOAST_CONTENT
} = require('../types').default


export function hideLoading () {
    return {
        type: GLOBAL_UPDATE_LOADING,
        payload: {
            isLoading: false,
            showMask: false
        }
    }
}

export function showLoading () {
    return {
        type: GLOBAL_UPDATE_LOADING,
        payload: {
            isLoading: true,
            showMask: false
        }
    }
}

export function updateLoading (options) {
    return {
        type: GLOBAL_UPDATE_LOADING,
        payload: options
    }
}

// 弹出toast
export function updateToastContent (message) {
    return {
        type: GLOBAL_UPDATE_TOAST_CONTENT,
        payload: message
    }
}