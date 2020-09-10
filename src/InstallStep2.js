import React, {Component} from 'react';
import Button from './components/Button/Button';
import ButtonIcon from './components/Button/ButtonIcon';
import FlexLayout from './components/FlexLayout/FlexLayout';
import FlexChild from './components/FlexLayout/FlexChild';
import TextStyles from './components/TextStyles/TextStyles';
import Dots from './components/Dots/Dots';
import Card from './components/Card/Card';
import BodyHeader from './components/Card/BodyHeader';
import Table from './components/Table/Table';
import CardFooter from './components/Card/CardFooter';

import './Installation.css';

class Installation2 extends Component {
    render() {
    	let stepName= <TextStyles type="mediumText">STEP 2 / 4</TextStyles>;
    	let action= <FlexLayout Valign="Start" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-loose">
	                    <FlexChild>
	                        <Dots status="completed"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="active"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="default"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                         <Dots status="default"></Dots>
	                    </FlexChild>
                </FlexLayout>  ;
    	let title= "Welcome to step2!";
    	let subTitle="Please link your facebook account";
        
        return (
             
              <Card showFooter={true}  showHeader={true} showMainHeader={true} action={action} stepName={stepName} title={title} subTitle={subTitle}>
                <Table/>
              </Card>
             
        );
    }
}

export default Installation2;
