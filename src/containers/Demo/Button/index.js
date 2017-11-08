import React from 'react'
import { YHPage } from 'yhbase'
import { Button } from 'yhui'

export default class ButtonDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div style={{padding: '0 20px'}}>
                    <Button type="default" style={{marginBottom: 20}}>default</Button>
                    <Button type="default" disabled style={{marginBottom: 20}}>default</Button>
                    <Button type="primary" style={{marginBottom: 20}}>primary</Button>
                    <Button type="primary" disabled style={{marginBottom: 20}}>primary</Button>
                    <Button type="warning" style={{marginBottom: 20}}>warning</Button>
                    <Button type="warning" disabled style={{marginBottom: 20}}>warning</Button>
                    <Button type="ghost" style={{marginBottom: 20}}>ghost</Button>

                    <Button type="ghost" inline style={{margin: 20}}>ghost</Button>
                    <Button type="ghost" disabled inline style={{margin: 20}}>ghost</Button>
                </div>
                <div>

                    <Button type="ghost" inline  size="small"
                            style={{margin: 20}}>
                        ghost
                    </Button>

                </div>
            </div>
        )
    }
}
