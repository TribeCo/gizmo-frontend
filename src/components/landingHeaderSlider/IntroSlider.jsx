'use client'

import React, { Component } from 'react'
import '../landingHeaderSlider/introSlide.css'
import DirectorBtn from '../landingHeaderSlider/SliderDirectorBtn/SliderDirectorBtn'
import { createRoot } from 'react-dom/client';

import Image from 'next/image'
import frame3 from '@/components/siteIcons/Frame12.png'
import ArrowIcon from '@/components/siteIcons/IconArrowDown.svg'
import illustration1 from '@/components/siteIcons/Ellipse.svg'
import { Button } from '@mui/material';

export default class introSlider extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      slideProducts: props.products,
      index: 2
    }

    this.nextBtn = this.nextBtn.bind(this);
    this.nextBtnAction = this.nextBtnAction.bind(this);
    this.prevBtnAction = this.prevBtnAction.bind(this);

    this.interval = null
    this.sliderTtl = React.createRef()
    this.sliderDes = React.createRef()
    this.sliderContainer = React.createRef()
  }


  componentDidMount() {
    this.interval = setInterval(this.nextBtnAction, 5000)
    this.interval
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.index !== this.state.index) {

      let draftIndex = null
      prevState.index === 0 ? draftIndex = this.state.slideProducts.length - 1 : draftIndex = prevState.index - 1
      let sliderTtl = this.sliderTtl.current
      let sliderDes = this.sliderDes.current
      setTimeout(() => {
        sliderTtl.classList.add('fadeOut')
        sliderDes.classList.add('fadeOut')
      }, 4500);
      sliderTtl.innerHTML = prevState.slideProducts[draftIndex].title
      sliderDes.innerHTML = prevState.slideProducts[draftIndex].description
      sliderTtl.classList.remove('fadeOut')
        sliderDes.classList.remove('fadeOut')
      sliderTtl.classList.add('fadeAnimation')
      sliderDes.classList.add('fadeAnimation')
      
    }
  }

  nextBtnAction() {

    let sliderContainer = this.sliderContainer.current
    let firstSlide = sliderContainer.firstChild
    let secondSlide = sliderContainer.lastChild
    
    this.setState((prevState) => ({
      index: prevState.index === this.state.slideProducts.length - 1 ? 0 : prevState.index + 1,
    }))

    firstSlide.classList.add('slideAnimation', 'second-slide-product', 'smoothHandler')
    firstSlide.addEventListener('animationend', () => {

      firstSlide.classList.toggle('second-slide-product')
      firstSlide.classList.remove('first-slide-product', 'w-36', 'left-[7%]', 'top-[40%]')

    })
    let createdFirstElem = document.createElement('div')
    createdFirstElem.style.opacity = '0'
    
    createdFirstElem.classList.add('first-slide-product', 'smoothHandler', 'absolute')

    firstSlide.firstChild.classList.add('w-full')

    secondSlide.remove()

    createdFirstElem.innerHTML = ''
    createdFirstElem.classList.add('left-[7%]', 'top-[40%]' , 'smoothHandler', 'h-44', 'w-36')
    
    const root = createRoot(createdFirstElem);
    root.render(<Image src={this.state.slideProducts[this.state.index].imageAdd}  alt={this.state.slideProducts[this.state.index].title}></Image>);

    createdFirstElem.classList.add('fadeAnimation')
    createdFirstElem.addEventListener('animationend', () => {
      createdFirstElem.classList.remove('fadeAnimation')
      createdFirstElem.style.opacity = '1'
    })

    sliderContainer.insertAdjacentElement('afterbegin', createdFirstElem)
  }

  prevBtnAction() {

    let sliderContainer = this.sliderContainer.current
    let firstSlide = sliderContainer.firstChild
    let secondSlide = sliderContainer.lastChild
    
    this.setState((prevState) => ({
      index: prevState.index === 0 ? this.state.slideProducts.length - 1 : prevState.index - 1,
    }))
      

    firstSlide.remove()
    secondSlide.firstChild.classList.remove('w-full')
    secondSlide.classList.add('slideAnimationBackwards', 'first-slide-product', 'absolute')
    secondSlide.classList.remove('second-slide-product')
      
    
    let createdFirstElem = document.createElement('div')
    createdFirstElem.style.opacity = '0'
    createdFirstElem.classList.add('second-slide-product', 'smoothHandler', 'absolute', 'left-[7%]', 'top-[40%]' , 'smoothHandler', 'h-44', 'w-36')
    let temp = <Image src={this.state.slideProducts[this.state.index].imageAdd}  alt={this.state.slideProducts[this.state.index].title}></Image>;

    createdFirstElem.classList.add('fadeAnimation')
    createdFirstElem.style.opacity = '1'

    const root = createRoot(createdFirstElem);
    root.render(<Image src={this.state.slideProducts[this.state.index].imageAdd}  alt={this.state.slideProducts[this.state.index].title}></Image>);

    sliderContainer.insertAdjacentElement('afterbegin', createdFirstElem)
  }

  nextBtn() {
    clearInterval(this.interval)

    this.nextBtnAction

    this.interval
    
  }


  render() {

    return (

      <div className="slider-container flex-row bg-palette-yellow px-20 py-4">


        <div className="content-wrapper flex gap-4 justify-between items-end">

          <div className="slider-content-wrapper w-80 h-full pb-8 pr-4">
            <div className="product-info flex-col justify-end h-full">

              <h3 ref={this.sliderTtl} className="product-info-title font-semibold text-3xl pb-4">
                {this.state.slideProducts[0].title}
              </h3>

              <p ref={this.sliderDes} className="product-info-paragraph text-sm text-palette-blue pb-4 text-justify">
                {this.state.slideProducts[0].description}
              </p>

            </div>

            <DirectorBtn/>

          </div>

          <div className="slider-images-wrapper w-2/3 h-[30rem] relative">

            <Image className='absolute h-84 top-[0%]' src={illustration1} alt='containerSvg'></Image>
            <Image className='absolute h-56 left-[-14%] top-40' src={illustration1} alt='containerSvg'></Image>

            <section className='absolute flex flex-col-reverse left-[35%] top-[50%]'>

              <Button onClick={this.prevBtnAction}>
              <Image className='prevBtn mb-4' src={ArrowIcon} alt='goPrev'></Image>
              </Button>

              <Button onClick={this.nextBtnAction}>
              <Image className='nextBtn rotate-180' src={ArrowIcon} alt='goNext'></Image>
              </Button>

            </section>
          
            <div ref={this.sliderContainer} className=" slider-container flex items-center justify-center w-full relative h-full">

              <div ref={this.firstSlide} className="first-slide-product absolute left-[7%] top-[40%] smoothHandler w-36 h-40">
                <Image className='' src={this.state.slideProducts[1].imageAdd} alt={this.state.slideProducts[1].title}></Image>
              </div>


              <div ref={this.secondSlide} className="second-slide-product smoothHandler left-[60%] top-[20%] h-44 w-64 absolute">
                <Image className='w-full' src={this.state.slideProducts[0].imageAdd} alt={this.state.slideProducts[0].title}></Image>

              </div>


            </div>

          </div>


        </div>
    </div>
    )
  }
}