import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import Dropdown from './Dropdown';

const links = {
	basses: [
		{
			id: 1,
			linkTitle: 'acoustic bass guitars',
			linkPath: '/basses/acoustic'
		},
		{
			id: 2,
			linkTitle: 'fretless bass guitars',
			linkPath: '/basses/fretless'
		},
		{
			id: 3,
			linkTitle: '5 string bass guitars',
			linkPath: '/basses/5-string'
		},
		{
			id: 4,
			linkTitle: '6 string bass guitars',
			linkPath: '/basses/6-string'
		},
		{
			id: 5,
			linkTitle: 'left handed bass guitars',
			linkPath: '/basses/left-handed'
		}
	]

}

export default function Header() {
	return(
		<React.Fragment>
			<header className="site-header px-5 py-1">
				<div className="header-logo">
					<img src={logo} alt="the bass store" />
				</div>
			</header>
			<NavWrapper>
				<nav className="navbar navbar-expand-sm navbar-dark ml-0 py-0 px-3">
						<ul className="navbar-nav align-items-lg-center">
							<li className="nav-item px-4">
								<Dropdown linkTitle="bass guitars" linkPath="/basses" menuLinks={links.basses}/>
		          </li>
		           <li className="nav-item px-4">
								<Dropdown linkTitle="amps" linkPath="/amps" menuLinks={links.basses} />
		          </li>
		          <li className="nav-item px-4">
								<Dropdown linkTitle="pedals" linkPath="/pedals" menuLinks={links.basses} />
		          </li>
		          <li className="nav-item px-4">
								<Dropdown linkTitle="accessories" linkPath="/accessories" menuLinks={links.basses} />
		          </li>
						</ul>		
				</nav>	
			</NavWrapper>
		</React.Fragment>
	);
}

const NavWrapper = styled.nav`
  background: var(--mainBlack);

	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
    text-transform: capitalize;
	}

	.nav-link:hover {
		color: var(--mainOrange) !important;
	}
`;
