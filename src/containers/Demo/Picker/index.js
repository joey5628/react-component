/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Picker } from 'yhui'

export default class SearchDemo extends YHPage {
    constructor(props) {
        super(props)
        this.state = {
            // value: ['HBS', '003']
            value: null
        }

    }


    render() {
        const options = [[
            {
                label: '安徽省',
                value: 'AHS'
            },
            {
                label: '湖北省',
                value: 'HBS'
            },
            {
                label: '山东省',
                value: 'SDS'
            },
            {
                label: '河南省',
                value: 'HNS'
            },
            {
                label: '湖南省',
                value: 'HUNANS'
            },
            // {
            //     label: '广东省',
            //     value: 'GDS'
            // }
        ], ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010']]
        return (
            <div style={{marginTop: 30}}>
                <Picker
                    options={options}
                    value={this.state.value}
                    onChange={(value) => {
                        console.log('onChange:', value)
                        this.setState({
                            value
                        })
                    }}/>
            </div>
        )
    }
}