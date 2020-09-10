import React, {Component} from 'react';
import './FormElement.css';


class CheckBox extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
        		<div className="inte-form__checkbox">
                    <input id="check" type="checkbox" name="" className="inte-formElement inte__checkoxFake"/>
                    <span className="inte__checkboxWrap">
                        <span className="inte__checkbox"></span>
                        <label for="check">{this.props.labelVal}</label>
                    </span>
                </div>
    	)
    }
}

export default CheckBox;