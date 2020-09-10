import React, {Component} from 'react';
import './TextStyles.css';
import zap from '../images/zap.png'

class TextStyles extends Component {

	constructor(props){
		super(props);
	}

	checkHeader = () => {
		switch(this.props.type){
			case "Heading" : return <h3 className="inte__Heading">{this.props.children}</h3>;
			case "SubHeading" : return  <span className="inte__Subheading">{this.props.children}</span>;
			case "SubheadingWithIcon" : return (
							<h4 className="inte__headingHelp inte__HeadingHelp-hasIcon">
								<span className="inte__icon">
									<img src={zap} alt=""/>
								</span>
								<span className="inte__Subheading">{this.props.children}</span>
							</h4> 
						);
			case "simpleText" : return  <span className="inte__text">{this.props.children}</span>;
			case "mediumText" : return <span className="inte__text--medium">{this.props.children}</span>;
		}
	}
    render() {
        return (
    		<div>
    			{this.checkHeader()}
    		</div>
    	) ;
    }
}

export default TextStyles;