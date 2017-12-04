/**
 * Created by zhangyi on 2017/10/19.
 */
import { Record } from 'immutable'

const InitialState = Record({
    loading: {
        isLoading: false,
        showMask: false
    },
    toast: {}
})

export default InitialState