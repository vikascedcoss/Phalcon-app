import React, {Component} from 'react';
import './FormElement.css';

class FormChild extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
        		
                <div class="inte-form__item">
                  {this.props.children}
                </div>
                
    	)
    }
}

export default FormChild;