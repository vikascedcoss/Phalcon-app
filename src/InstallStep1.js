import React, {Component} from 'react';
import Button from './components/Button/Button';
import ButtonIcon from './components/Button/ButtonIcon';
import FlexLayout from './components/FlexLayout/FlexLayout';
import FlexChild from './components/FlexLayout/FlexChild';
import TextStyles from './components/TextStyles/TextStyles';
import Dots from './components/Dots/Dots';
import Card from './components/Card/Card';
import BodyHeader from './components/Card/BodyHeader';

import './Installation.css';

class Installation1 extends Component {
    render() {
    	let stepName= <TextStyles type="mediumText">STEP 1 / 4</TextStyles>;
    	let action= <FlexLayout Valign="Start" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-loose">
	                    <FlexChild>
	                        <Dots status="active"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="default"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="default"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                         <Dots status="default"></Dots>
	                    </FlexChild>
                </FlexLayout>  ;
    	let title= "Welcome!";
    	let subTitle="Please link your facebook account";
        
        return (
             
              <Card showFooter={false} showHeader={true} showMainHeader={true} action={action} stepName={stepName} title={title} subTitle={subTitle}>
              	<div class="mt-120">
              		<FlexLayout direction="inte-flex--vertical" Valign="intel-flex--align-end" Halign="" Spacing="inte-flex--spacing-loose">
              			<FlexChild>
	                        <Button type="Primary">Register</Button>
	                    </FlexChild>
	                    <FlexChild>
	                       <TextStyles type="simpleText">By clicking Connect You agree our terms and Condition</TextStyles>
	                    </FlexChild>
              		</FlexLayout>
              	</div>
              </Card>
             
        );
    }
}

export default Installation1;
