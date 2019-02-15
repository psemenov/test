import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';
import Dropdown from './Dropdown';
import Search from './Search';
const links = {
	basses: [
		{
			id: 1,
			linkTitle: 'all bass guitars',
			linkPath: '/basses'
		},
		{
			id: 2,
			linkTitle: 'electic bass guitars',
			linkPath: '/basses/electric'
		},
		{
			id: 3,
			linkTitle: 'acoustic bass guitars',
			linkPath: '/basses/acoustic'
		},
		{
			id: 4,
			linkTitle: 'fretless bass guitars',
			linkPath: '/basses/fretless'
		},
		{
			id: 5,
			linkTitle: '5 string bass guitars',
			linkPath: '/basses/5-string'
		},
		{
			id: 6,
			linkTitle: '6 string bass guitars',
			linkPath: '/basses/6-string'
		},
		{
			id: 7,
			linkTitle: 'left handed bass guitars',
			linkPath: '/basses/left-handed'
		}
	]

}

export default class Header extends React.Component {
	state = {
    toggle: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

	render () {
		return (
			<React.Fragment>
				<header className="site-header px-md-5 py-2 container-fluid">
					<div className="row align-items-md-center">
						<div className="header-logo col-md-3 col-6 mb-3 ">
							<Link to="/">
								<img src={logo} alt="the bass store" />
							</Link>
						</div>
						<Search id="search-md" />
						<div className="header-link-group col-lg-2 col-md-3 col-5 col-sm-4 offset-lg-1 offset-md-0 offset-sm-2 offset-1">
							<div className="header-link mr-4">
								<Link to="/signin">
									<i className="fas fa-sign-in-alt header-link-icon"></i>
								</Link>
							</div>
						
							<div className="header-link">
								<Link to="/cart">
									<i className="fas fa-shopping-cart header-link-icon"></i>
								</Link>
							</div>
						</div>
						<Search id="search-ls" />
					</div>

				</header>
				<NavWrapper>
					<nav className="navbar navbar-expand-md navbar-dark ml-0 py-0 px-md-3 px-0">
							<button className="navbar-toggler py-3" data-toggle="collapse" data-target="#navbarCollapse" 
							id="collapseButton" style={{width: "100%"} } 
								onClick={this.handleToggle}>
	                Our Products
	                {this.state.toggle ? <i className="fas fa-caret-up ml-2 fa-lg" /> : <i className="fas fa-caret-down ml-2 fa-lg" />}
	            </button>
							<ul className="navbar-nav collapse navbar-collapse align-items-lg-center" id="navbarCollapse">
								<li className="nav-item px-md-4">
									<Dropdown linkTitle="bass guitars" linkPath="/basses" 
									menuLinks={links.basses} id="bassesDropdown" smallScreen={this.state.toggle} />
			          </li>
			           <li className="nav-item px-md-4">
									<Dropdown linkTitle="amps" linkPath="/amps" 
									menuLinks={links.basses} id="ampsDropdown" smallScreen={this.state.toggle} />
			          </li>
			          <li className="nav-item px-md-4">
									<Dropdown linkTitle="pedals" linkPath="/pedals" 
									menuLinks={links.basses} id="pedalsDropdown" smallScreen={this.state.toggle} />
			          </li>
			          <li className="nav-item px-md-4">
									<Dropdown linkTitle="accessories" linkPath="/accessories" 
									menuLinks={links.basses} id="accessoriesDropdown" smallScreen={this.state.toggle} />
			          </li>
			          <li className="nav-item px-md-4">
									<Link to="/help" className="nav-link">Help</Link>
			          </li>
							</ul>		
					</nav>	
				</NavWrapper>
			</React.Fragment>
		);
	}
}

const NavWrapper = styled.nav`
  background: var(--mainBlack);
	@media (max-width: 767px) {
		.nav-item {
			background-color: var(--mainLightBlack) !important;
			width: 100%;
			border-bottom: 1px solid var(--mainOrange) !important;
		}

		.nav-item a {
			padding-left: 1rem;
		}
	}
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
    text-transform: capitalize;
	}

	.nav-link:hover {
		color: var(--mainOrange) !important;
	}

	.navbar-toggler {
		border: none !important;
		color: var(--mainWhite) !important;
	}

	.navbar-toggler:focus, .navbar-toggler:active {
		outline: none;
  	box-shadow: none !important;
	}
`;
