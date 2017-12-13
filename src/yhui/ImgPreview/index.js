import React, { PureComponent } from 'react'
import './index.less'
import Dialog from '../Dialog'
import Icon from '../Icon'
import SwipeableViews from 'react-swipeable-views';

export default class ImgPreview extends PureComponent {
    constructor(props) {
        super(props)
        this.wrapper = document.getElementById('modal-root')
        this.state = {
            activeIndex: this.props.defaultIndex
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.defaultIndex !== undefined) {
            this.setState({
                activeIndex: nextProps.defaultIndex
            })
        }
    }

    componentDidUpdate (prevProps, prevState) {
        const props = this.props
        if (!!props.visible && !prevProps.visible) {
            this.wrapper.addEventListener('touchmove', this.touchMove, false)
        }

        if (!props.visible && !!prevProps.visible) {
            this.wrapper.removeEventListener('touchmove', this.touchMove, false)
        }
    }

    static defaultProps = {
        prefixCls: 'yh-imgpreview',
        visible: false,
        imgUrls: [],
        defaultIndex: 0,
        onClose: ()=>{},
        onDelete: ()=>{}
    }

    touchMove = (event) => {
        // 判断默认行为是否可以被禁用
        if (event.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!event.defaultPrevented) {
                event.preventDefault();
            }
        }
    }

    render() {
        const { activeIndex } = this.state
        const { prefixCls, visible, imgUrls, onClose, onDelete } = this.props

        const swipeSty = {
            height: '100%',
            width: '100%'
        }

        return (
            <Dialog
                ref="dialog"
                visible={visible}
                className={`${prefixCls}`}
            >
                <div
                    className={`${prefixCls}-content`}
                    onClick={onClose}
                >
                    <div className="pagination">
                        <span className="current-page">{activeIndex + 1}</span>
                        /
                        <span className="total-page">{imgUrls.length}</span>
                    </div>

                    <div className="btn-delete" onClick={(e)=>{
                        onDelete(this.state.activeIndex)
                        e.stopPropagation();
                        return false;
                    }}>
                        <Icon type="delete-bin"/>
                    </div>

                    <SwipeableViews
                        index={activeIndex}
                        resistance
                        containerStyle={swipeSty}
                        style={swipeSty}
                        onChangeIndex={(activeIndex)=>{
                            this.setState({
                                activeIndex
                            })
                        }}
                    >
                        {
                            imgUrls.map((cur, index)=>{
                                return (
                                    <div className="img-wrapper" key={index}>
                                        <img src={cur}/>
                                    </div>
                                )
                            })
                        }
                    </SwipeableViews>
                </div>
            </Dialog>
        )
    }
}