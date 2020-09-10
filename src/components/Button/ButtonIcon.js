import React, {Component} from 'react';
import './Button.css';

class ButtonIcon extends Component {

	constructor(props){
		super(props);
	}
    render() {
        return (
		        <button className={`inte-btn  inte-btn--hasIcon ${this.props.type}`}>
		         	<span class="inte-btn__icon">
					</span>
					<span class="inte__text">{this.props.children}</span>
		         </button>
        	) ;
    }
}

export default ButtonIcon;