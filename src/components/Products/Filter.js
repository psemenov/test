import React, { Component } from 'react';
import styled from 'styled-components';
import {headerLinks} from '../../headerLinks';

export default class Filter extends Component {
	constructor(){
		super();
		this.state = {

				collapse1: true,
				collapse2: false,
				collapse3: false

		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event){
		console.log(event.target.id);
		const {id} = event.target;
		this.setState(prevState => {
			return {
				[id]: !prevState[id]
			}
		})
	}

	render() {
		return (
			<div className="col-xl-2 col-md-3 ml-4 mt-3 mx-auto">
						<FilterWrapper className="filter text-capitalize">
							<div className="filter-title">							
								<h3 className="text-center">filter</h3>						
							</div>
							<div className="filter-body">
								<div className="filter-box p-2">
									<div className="box-header d-flex justify-content-between">
										<p className="align-self-center">sort by</p>
										<button className="btn p-1 btn-collapse" name="button1" type="button" data-toggle="collapse" 
										data-target="#collapse1">
											{this.state.collapse1 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
										</button>
									</div>
									<div className="box-content collapse show" id="collapse1" onTransitionEnd={this.handleClick}>
										<div className="custom-control custom-radio">
										  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
										  <label className="custom-control-label" htmlFor="customRadio1">popularity</label>
										</div>
										<div className="custom-control custom-radio">
										  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
										  <label className="custom-control-label" htmlFor="customRadio2">
										  	price: low <span className="text-lowercase">to</span> high
										  </label>
										</div>
										<div className="custom-control custom-radio">
										  <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
										  <label className="custom-control-label" htmlFor="customRadio3">
										  	price: high <span className="text-lowercase">to</span> low
										  </label>
										</div>
									</div>
								</div>
								<div className="filter-box p-2">
									<div className="box-header d-flex justify-content-between">
										<p className="align-self-center">availability</p>
										<button className="btn p-1 btn-collapse" name="button2" type="button" data-toggle="collapse" 
										data-target="#collapse2">
											{this.state.collapse2 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
										</button>
									</div>
									<div className="box-content collapse" id="collapse2" onTransitionEnd={this.handleClick}> 
										<div className="custom-control custom-checkbox">
										  <input type="checkbox" className="custom-control-input" id="customCheck1" />
										  <label className="custom-control-label" htmlFor="customCheck1">in stock</label>
										</div>	
									</div>
								</div>
								<div className="filter-box p-2">
									<div className="box-header d-flex justify-content-between">
										<p className="align-self-center">bass guitar types</p>
										<button className="btn p-1 btn-collapse" name="button3" type="button" data-toggle="collapse" 
										data-target="#collapse3" >
											{this.state.collapse3 ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
										</button>
									</div>
									<div className="box-content collapse" id="collapse3" onTransitionEnd={this.handleClick}>
										{headerLinks.basses.map(item => {
											return (
							    			<div className="custom-control custom-checkbox" key={item.id}>
												  <input type="checkbox" className="custom-control-input" id={"types" + item.id} />
												  <label className="custom-control-label" htmlFor={"types" + item.id}>{item.linkTitle}</label>
												</div>	
						    			);
										})}
									</div>
								</div>
								<div className="filter-box p-2 no-bb">
									<button type="button" className="btn btn-block show-btn">Show Products</button>
								</div>
							</div>
						</FilterWrapper>
					</div>	
		);
	}
}

const FilterWrapper = styled.div`
	background: transparent;
	border: 0.05rem solid var(--mainDarkWhite);
	border-radius: 0.3rem;

	.filter-title {
		background-color: #E2E2E4;
		border-top-right-radius: 0.3rem;
		border-top-left-radius: 0.3rem;
		border-bottom: 0.5px solid var(--mainDarkWhite);
	}

	.filter-box {
		border-bottom: 0.5px solid var(--mainDarkWhite);
	}

	.custom-control {
		-webkit-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	}

	.custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: none;
	}

	.custom-control-input:checked ~ .custom-control-label::before {
		background-color: var(--mainOrange) !important;
		border-color: var(--mainGreen) !important;
	}
	
	.btn-collapse:focus {
		box-shadow: none !important;
	}
	
	i {
		pointer-events: none !important;
	}

	.show-btn {
		background-color: var(--mainOrange) !important;
		color: var(--mainWhite) !important;
	}

	.show-btn:hover {
		background-color: var(--mainDarkOrange) !important;
	}

	.show-btn:focus {
		box-shadow: none !important;
		outline: none !important;
	}

	.no-bb {
		border-bottom: none !important;
	}

	.box-content {
			font-size: 1.2rem;
	}

	@media (max-width: 767px) {
		.box-header {
			font-size: 1.6rem;
		}
		.box-content {
			font-size: 1.4rem;
		}

		.show-btn {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 991px) {
		.box-header {
			font-size: 1.3rem;
		}
		.box-content {
			font-size: 1.1rem;
		}
	}

	.box-header {
		font-size: 1.2rem;
	}

	.box-content {
		font-size: 1rem;
	}
	

`;