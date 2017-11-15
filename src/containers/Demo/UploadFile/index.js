/**
 * Created by zhangyi on 2017/11/15.
 */
import React from 'react'
import { YHPage } from 'yhbase'
import { InputImage } from 'yhui'
import './index.less'


export default class UploadFile extends YHPage {
    constructor(props) {
        super(props)
        this.state = {
            urls: []
        }
    }

    getObjectURL (file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }


    onChange = (data) => {
        let files = _.toArray(data.files)
        // let files = data.newFiles
        console.log('files')
        let urls = files.map((cur) => {
            return this.getObjectURL(cur)
        })
        console.log('urls:', urls)
        this.setState({
            urls
        })
    }

    renderImage () {
        const { urls } = this.state
        return (
            <ul className="image-wrapper">
                {
                    urls.map((cur, index) => {
                        return (
                            <li key={index}>
                                <img src={cur} alt=""/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render () {
        return (
            <div className="file-area">
                <InputImage
                    fileType="blob"
                    imageType="image/jpeg"
                onChange={this.onChange}>
                    <a className="btn-browser">
                        选择图片
                    </a>
                </InputImage>
                { this.renderImage() }
            </div>
        )
    }
}