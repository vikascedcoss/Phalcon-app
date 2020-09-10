import React, {Component} from 'react';
import './Card.css';
import '../Button/Button';
import BodyHeader from './BodyHeader';
import FlexLayout from '../FlexLayout/FlexLayout';
import Button from '../Button/Button';
import CardHeader from './CardHeader';
import CardHelp from './CardHelp';
import CardFooter from './CardFooter';

class Card extends Component {
    render() {
        return (
    		<div class="inte-card">
    			{(this.props.showMainHeader === true) ? <CardHeader {...this.props}/>: ''}
    			<div class="inte-card__Body">
    				{(this.props.showHeader === true) ? <BodyHeader {...this.props} /> : ' '}
                    {(this.props.showHelp === true) ? <CardHelp {...this.props} /> : ''} 
    				<div class="inte__cardContent">
		              	<div class="inte__cardContent">
							{this.props.children}
						</div>
    				</div>
    			</div>
    			{(this.props.showFooter === true) ? <CardFooter /> : ' '}
    		</div>
    	) ;
    }
}

export default Card;