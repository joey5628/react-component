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
        payload: false
    }
}

export function showLoading () {
    return {
        type: GLOBAL_UPDATE_LOADING,
        payload: true
    }
}

export function updateLoading (isLoading) {
    return {
        type: GLOBAL_UPDATE_LOADING,
        payload: isLoading
    }
}

// 弹出toast
export function updateToastContent (message) {
    return {
        type: GLOBAL_UPDATE_TOAST_CONTENT,
        payload: message
    }
}