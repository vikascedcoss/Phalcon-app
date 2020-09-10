import React, {Component} from 'react';
import './Card.css';
import FlexLayout from '../FlexLayout/FlexLayout';
import FlexChild from '../FlexLayout/FlexChild';
import Dots from '../Dots/Dots';

class CardHeader extends Component {
    render() {
        return (
        		<div class="inte-card__Header">
        			<div class="inte-flex intel-flex--distribute-spaceBetween intel-flex--align-center">
                        <FlexChild>
                            {this.props.stepName}
                        </FlexChild>
                        <FlexChild>
                            {this.props.action}
                        </FlexChild>
                    </div>
        		</div>
        	) ;
    }
}

export default CardHeader;