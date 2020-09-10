import React, {Component} from 'react';
import './FormElement.css';


class SelectComponment extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
        		<div>
                        <select name="" class="inte-formElement inte-select">
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                        {(this.props.showHelp=== true) ? <span class="inte-form__itemHelp">{this.props.SelectHelp}</span> : ''}      
                </div>
    	)
    }
}

export default SelectComponment;