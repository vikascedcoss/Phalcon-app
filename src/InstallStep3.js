import React, {Component} from 'react';
import Button from './components/Button/Button';
import ButtonIcon from './components/Button/ButtonIcon';
import FlexLayout from './components/FlexLayout/FlexLayout';
import FlexChild from './components/FlexLayout/FlexChild';
import TextStyles from './components/TextStyles/TextStyles';
import Dots from './components/Dots/Dots';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import CardFooter from './components/Card/CardFooter';
import LRLayout from './components/LRLayout/LRLayout';
import FormElement from './components/FormElement/FormElement';
import FormChild from './components/FormElement/FormChild';
import SelectComponment from './components/FormElement/Select';
import CheckBox from './components/FormElement/CheckBox';


class Installation3 extends Component {
    render() {
    	let stepName= <TextStyles type="mediumText">STEP 3 / 4</TextStyles>;
    	let action= <FlexLayout Valign="Start" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-loose">
	                    <FlexChild>
	                        <Dots status="completed"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="completed"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                        <Dots status="active"></Dots>
	                    </FlexChild>
	                    <FlexChild>
	                         <Dots status="default"></Dots>
	                    </FlexChild>
                </FlexLayout>  ;
    	let title= "Warehouse Mapping & Category Mapping";
    	let subTitle="Get started by adding your first category here.";

        let LrHelpText="Primary color(s) of your item. Allowed values";

        let SelectHelp="This field also used for default value, in case given attribute not found ";
        let LrHelpText2="Brand name, unique manufacturer part name (MPN), or Global Trade Item Number (GTIN) of the item.";
        let LrHelpText3="Lorem Ipsum.";
        
        return (
             
              <Card showFooter={false}  showHeader={true} showHelp={true} showMainHeader={true} action={action} stepName={stepName}
               title={title} subTitle={subTitle} helpText="Help">
               <LRLayout title="Color" showLRHelp={true} LrHelpText={LrHelpText}>
                    <FormElement>
                      <FormChild>
                        <SelectComponment showHelp={true} SelectHelp={SelectHelp}></SelectComponment>
                      </FormChild>
                      <FormChild>
                        <SelectComponment></SelectComponment>
                      </FormChild>
                </FormElement>
               </LRLayout>
               <LRLayout title="Brand" showLRHelp={true} LrHelpText={LrHelpText2}>
                    <FormElement>
                      <FormChild>
                        <SelectComponment showHelp={true} SelectHelp={SelectHelp}></SelectComponment>
                      </FormChild>
                      <FormChild>
                        <SelectComponment></SelectComponment>
                      </FormChild>
                </FormElement>
               </LRLayout>
               <LRLayout title="Product Category" showLRHelp={true} LrHelpText={LrHelpText3}>
                    <FlexLayout Valign="intel-flex--align-center" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-Extraloose">
                        <FlexChild>
                              <FormChild>
                                <CheckBox labelVal="Lucknow"></CheckBox>
                              </FormChild>
                        </FlexChild>
                        <FlexChild>
                              <FormChild>
                                <CheckBox labelVal="Lucknow"></CheckBox>
                              </FormChild>
                        </FlexChild>
                    </FlexLayout>
                    <FlexLayout Valign="intel-flex--align-center" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-Extraloose">
                        <FlexChild>
                              <FormChild>
                                <CheckBox labelVal="Lucknow"></CheckBox>
                              </FormChild>
                        </FlexChild>
                        <FlexChild>
                              <FormChild>
                                <CheckBox labelVal="Lucknow"></CheckBox>
                              </FormChild>
                        </FlexChild>
                    </FlexLayout>
               </LRLayout>
              </Card>
             
        );
    }
}

export default Installation3;
