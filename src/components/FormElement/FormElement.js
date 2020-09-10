import React, {Component} from 'react';
import './FormElement.css';
import FormChild from './FormChild';

class FormElement extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
        		<div class="inte-form">
                       {this.props.children}
                </div>
    	)
    }
}

export default FormElement;