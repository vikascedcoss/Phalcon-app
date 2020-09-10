import React, {Component} from 'react';
import './Card.css';
import FlexLayout from '../FlexLayout/FlexLayout';
import TextStyles from '../TextStyles/TextStyles';

class BodyHeader extends Component {
    render() {
        return (
        		<div class="inte-CardBody__headerWrap">
        			<div class="inte__headerWrap-Heading">
                        <TextStyles type="Heading">{this.props.title}</TextStyles>
        				<TextStyles type="SubheadingWithIcon">{this.props.subTitle}</TextStyles>
        			</div>
        		</div>
        	) ;
    }
}

export default BodyHeader;