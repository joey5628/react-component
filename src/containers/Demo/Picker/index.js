/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import moment from 'moment'
import { Picker, DatePicker } from 'yhui'
import './index.less'

export default class SearchDemo extends YHPage {
    constructor(props) {
        super(props)
        this.state = {
            // value: ['HBS', '003']
            visible: false,
            dateVisible: false,
            dateValue: null,
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
        // let newMoment = moment
        // console.log(newMoment())
        // debugger
        // console.log('moment:', moment("20120901", "YYYYMMDD").fromNow())

        const { value, visible, options, okValue, dateValue, dateVisible } = this.state

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

                <div
                    style={{marginTop: 20}}
                    className="selection"
                    onClick={() => {
                        this.setState({
                            dateVisible: true
                        })
                    }}>
                    { dateValue ? JSON.stringify(dateValue) : '请选择日期' }
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

                <DatePicker
                    visible={dateVisible}
                    onClose={()=>{
                        this.setState({
                            dateVisible: false
                        })
                    }}
                    defaultValue={dateValue}
                    onChange={(value) => {
                        console.log('onChange:', value)
                        this.setState({
                            dateValue: value
                        })
                    }}/>
            </div>
        )
    }
}