/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Picker } from 'yhui'
import './index.less'

export default class SearchDemo extends YHPage {
    constructor(props) {
        super(props)
        this.state = {
            // value: ['HBS', '003']
            value: null,
            okValue: null,
            options: [[
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
        }
    }


    render() {

        const { value, visible, options, okValue } = this.state

        return (
            <div style={{marginTop: 30}}>
                <div
                    className="selection"
                    onClick={() => {
                        this.setState({
                            visible: true
                        })
                    }}>
                    { okValue ? JSON.stringify(okValue) : '请选择' }
                </div>
                <Picker
                    visible={visible}
                    onClose={()=>{
                        this.setState({
                            visible: false
                        })
                    }}
                    options={options}
                    value={value}
                    onChange={(value) => {
                        console.log('onChange:', value)
                        this.setState({
                            value
                        })
                    }}
                    onOk={(value)=>{
                        console.log('onOk')
                        this.setState({
                            okValue: value
                        })
                    }}
                    onDismiss={()=>{
                        console.log('onDismiss')
                    }}/>
            </div>
        )
    }
}