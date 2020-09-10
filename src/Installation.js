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

class Installation extends Component {
    render() {
    	let stepName= <TextStyles type="mediumText">STEP 1 / 4</TextStyles>;
    	let action= <FlexLayout Valign="end">
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
    	let title= "Welcome!";
    	let subTitle="Please link your facebook account";
        
        return (
             <div className="inte inte-wrapper inte-onbaord">  
              <Card showHeader={true} showMainHeader={true} action={action} stepName={stepName} title={title} subTitle={subTitle}>
              </Card>
             </div>
        );
    }
}

export default Installation;
