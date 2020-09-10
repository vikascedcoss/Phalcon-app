import React, {Component} from 'react';

class FlexChild extends Component {
    render() {
        return (
    			<div class="inte-flex__item">
    				{this.props.children}
    			</div>
        	) ;
    }
}

export default FlexChild;