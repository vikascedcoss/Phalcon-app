import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

	constructor(props){
		super(props);
	}

	checkType= () => {
		switch(this.props.type){
			case "Primary" : return (
						 <button className="inte-btn inte-btn--Primary">
				         	<span className="inte__text">{this.props.children}</span>
				         </button>
				);
			case "Outlined" : return (
					 <button className="inte-btn inte-btn--Outlined">
			         	<span className="inte__text">{this.props.children}</span>
			         </button>
				);
			case "Plain" : return (
					 <button className="inte-btn inte__plain-btn">
			         	<span className="inte__text">{this.props.children}</span>
			         </button>
				);
			case "PlainDark" : return (
					 <button className="inte-btn inte__plain-btn inte-plain-dark-btn">
			         	<span className="inte__text">{this.props.children}</span>
			         </button>
				);
		}
	}
    render() {
        return (
		        <div>
		        	{this.checkType()}
		        </div>
        	) ;
    }
}

export default Button;