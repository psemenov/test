import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Dropdown(props) {
	const {menuLinks} = props;
	console.log(menuLinks);

	return(
		<DropdownWrapper style={{width: '100%'}}>
			<div className="dropdown">
				<Link to={props.linkPath} className="nav-link"> 
	    		{props.linkTitle}
	    		<button className="dropdown-toggle" id="bassDropdown" 
	    		data-toggle="dropdown" style={{display: 'none'}}></button>
	    	</Link>

	    	<div className="dropdown-menu">
	    		{menuLinks.map(item => {
						return (
	    				<Link className="dropdown-item" key={item.id} to={item.linkPath}>{item.linkTitle}</Link>
	    			);
					})}
				</div>
	    </div>
    </DropdownWrapper>
	);
}

const DropdownWrapper = styled.div`
	.dropdown-toggle::after {
    display:none;
	}

	.dropdown-item {
		color: var(--mainWhite) !important;
		font-size: 1.1rem;
		text-transform: capitalize;
		padding: 0.5rem 0.5rem;
	}

	.dropdown-menu {
		 background-color: var(--mainBlack);
		 border-radius: 0;
		 margin: 0;
		 border-top: 0.1rem solid var(--mainOrange);
	}

	.dropdown-item:hover, .dropdown-item:active, .dropdown-item:focus {
		background-color: var(--mainLightBlack);
		color: var(--mainOrange) !important;
	}
	.dropdown-item:focus {

	}
`;