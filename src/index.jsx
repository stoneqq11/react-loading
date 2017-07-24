'use strict'

import './index.css'

import React, { Component } from 'react'


const TEXT = '玩命加载中..'

/*
loading
props:
	image: ''
	text: '加载中..'
*/
export default class Loading extends Component {

	render () {

		let {text = TEXT, image} = this.props

		return (
			<div className='loading-wrap'>
				{image && <img className='loading' src={image}/>}
				<p>{text}</p>
			</div>
		)
	}
}