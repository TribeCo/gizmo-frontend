import React, { Component } from 'react'
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

export default class introSlider extends Component {

  constructor (props) {
    super(props)

    this.state = [
      slideProducts = [
        {id: 1, imageAdd: '', title: '',  description: '', link: ''},
        {id: 2, imageAdd: '', title: '',  description: '', link: ''},
        {id: 3, imageAdd: '', title: '',  description: '', link: ''},
        {id: 4, imageAdd: '', title: '',  description: '', link: ''},
        {id: 5, imageAdd: '', title: '',  description: '', link: ''},
        {id: 6, imageAdd: '', title: '',  description: '', link: ''},
      ],
      
      index = 0
    ]

    const swiper = new Swiper(".swiper", {

      direction: 'horizontal',
      loop: true,
      fill: '1 | 2',
      rows: 1,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }


    })
  }

  render() {
    let {id, imageAdd, title, description} = this.state.slideProducts[this.state.index]

    return (
      <div className="slider-container">
        <div className="content-wrapper">

          <div className="slider-images-wrapper">

            <div className="swiper h-80 flex relative">

              <div className="swiper-pagination absolute"></div>


              <div className="swiper-slide h-full">
                <img src={imageAdd} className='swiper-slide-image' alt="" />
              </div>

              <div className="swiper-slide h-40">
                <img src={this.state.slideProducts[index + 1].imageAdd} className='swiper-slide-image' alt="" />
              </div>

              <div className="swiper-button-prev absolute"><img src="" alt="" /></div>
              <div className="swiper-button-next absolute"><img src="" alt="" /></div>

            </div>

          </div>

          <div className="slider-content-wrapper">
            <div className="product-info">

              <h3 className="product-info-title">
                {title}
              </h3>

              <p className="product-info-paragraph">
                {description}
              </p>

            </div>

            <button className="product-info-directorBtn">
              <span>!هم اکنون خرید کنید</span>
              <img src="" alt="" />
            </button>
          </div>

        </div>
    </div>
    )
  }
}
