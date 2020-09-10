import React, {Component} from 'react';
import './FlexLayout.css';

class FlexLayout extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
        		<div className={`inte-flex ${this.props.Valign} ${this.props.Halign} ${this.props.Spacing} ${this.props.direction}`}>
        			{this.props.children}
				</div>
    	)
    }
}

export default FlexLayout;