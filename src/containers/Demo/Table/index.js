/**
 * Created by zhangyi on 2017/11/1.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Table } from 'yhui'

export default class TableDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render() {
        const columns = [{
            title: 'Name', dataIndex: 'name', key:'name', width: 100,
        }, {
            title: 'Age', dataIndex: 'age', key:'age', width: 100,
        }, {
            title: 'Address', dataIndex: 'address', key:'address', width: 200,
        }, {
            title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
        }];

        const data = [
            { name: 'Jack', age: 28, address: 'some where', key:'1' },
            { name: 'Rose', age: 36, address: 'some where', key:'2' },
        ];

        return (
            <div className="table-container">
                <Table columns={columns} data={data} width="700px"/>
            </div>
        )
    }
}
