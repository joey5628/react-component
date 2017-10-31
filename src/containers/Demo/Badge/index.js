/**
 * Created by zhangyi on 2017/10/31.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { Badge } from 'yhui'

export default class BadgeDemo extends YHPage {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Badge dot/>
                <br/>
                <br/>
                <br/>
                <Badge dot>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>

                <br/>
                <br/>
                <Badge text={30}>
                    <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
                </Badge>
            </div>
        )
    }
}