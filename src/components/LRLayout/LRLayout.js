import React, {Component} from 'react';
import './LRLayout.css';
import FlexLayout from '../FlexLayout/FlexLayout';
import FlexChild from '../FlexLayout/FlexChild';

class LRLayout extends Component {

    render() {
        return (
	    		<div className={`inte__lr-Layout ${this.props.Valign} ${this.props.Halign}`}>
	    			<div class="inte__l-Layout">
		    			<FlexLayout direction="inte-flex--vertical" Valign="Start" Halign="intel-flex--distribute-start" Spacing="inte-flex--spacing-loose">
			    			<FlexChild>
			    				<h3 class="inte__l-title">{this.props.title}</h3>
			    			</FlexChild>
			    			{(this.props.showLRHelp === true) ? <FlexChild><h4 class="inte__l-titleHelp">{this.props.LrHelpText}</h4></FlexChild> : ''}
			    		</FlexLayout>

					</div>
					<div class="inte__r-Layout">
						{this.props.children}
		    		</div>
		    	</div>
    	)
    }
}

export default LRLayout;