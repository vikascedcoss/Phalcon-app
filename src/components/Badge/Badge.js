import React, {Component} from 'react';
import './Badge.css';

class Badge extends Component {

	constructor(props){
		super(props);
	}

	checkBadgeType= () => {
		switch(this.props.type){
			case "Success" : return (
						 <div class="inte--status inte--statusSuccess">
							<span>{this.props.children}</span>
						</div>
				);
			case "partialError" : return (
					  <div class="inte--status inte--statusPartialError">
							<span>{this.props.children}</span>
						</div>
				);
			case "Error" : return (
					 <div class="inte--status inte--statusError">
							<span>{this.props.children}</span>
						</div>
				);
		}
	}
    render() {
        return (
		        <div>
		        	{this.checkBadgeType()}
		        </div>
        	) ;
    }
}

export default Badge;