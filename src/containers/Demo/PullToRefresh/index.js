/**
 * Created by zhangyi on 2017/10/31.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { PullToRefresh } from 'yhui'
import './index.less'

export default class PullToRefreshDemo extends YHPage {
    constructor(props){
        super(props)
        this.state = {
            height: 'auto',
            hasMore: true,
            loading: false,
            list: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth']
        }
    }

    componentDidMount () {
        let headerHeight = document.querySelector('.demo-header').offsetHeight
        let windowHeight = window.innerHeight

        let height = windowHeight - headerHeight - 1
        this.setState({
            height
        })
        console.log('height')
        this.componentWillUpdate()
    }

    componentWillUpdate () {
        console.log('componentWillUpdate')
    }

    onLoadMore = () => {
        let { list, hasMore, loading } = this.state
        if (loading) {
            return;
        }
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            if (list.length >= 40) {
                hasMore = false
            }
            this.setState({
                list: list.concat(list),
                loading: false,
                hasMore
            })
        }, 3000)
    }

    render() {
        const {
            list, loading, hasMore, height
        } = this.state
        return (
            <div className="pull-demo">
                <PullToRefresh
                    height={height}
                    loading={loading}
                    hasMore={hasMore}
                    onLoadMore={this.onLoadMore}>
                    {
                        list.map((cur, index)=>{
                            return (
                                <div className="item" key={index}>
                                    <span>{cur}</span>
                                </div>
                            )
                        })
                    }
                </PullToRefresh>
            </div>
        )
    }
}