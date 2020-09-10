import React, {Component} from 'react';
import './Dots.css';

class Dots extends Component {

	constructor(props){
		super (props);
	}

	checkType = () => {
		switch(this.props.status){
			case "active"  : return <span class="inte__dot inte__dot--active"></span>;
			case "completed"  : return <span class="inte__dot inte__dot--complete"></span>;
			case "default" : return <span class="inte__dot"></span>;
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

export default Dots;