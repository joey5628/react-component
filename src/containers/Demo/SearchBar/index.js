/**
 * Created by zhangyi on 2017/10/25.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { SearchBar, SearchLoading } from 'yhui'

export default class SearchDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <SearchBar
                    onSubmit={()=>{ console.log('onSubmit') }}
                    onChange={(value)=>{ console.log('onChange value:', value) }}
                    onFocus={()=>{ console.log('onFocus') }}
                    onBlur={()=>{ console.log('onBlur') }}
                    onCancel={(value)=>{ console.log('onCancel value:', value) }}
                    onClear={()=>{ console.log('onClear') }}/>

                <div>
                    <SearchLoading/>
                </div>
            </div>
        )
    }
}
