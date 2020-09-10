import React, {Component} from 'react';
import HelpIcon from '../images/help.png'

class CardHelp extends Component {
    render() {
        return (
        		<div class="inte-CardBody__headerWrap inte-CardBody__headerWrap--hasAction mt-30">
                   <div class="inte-CardBody__headerWrap-Heading">
                        <span class="inte__seperator"></span>
                    </div>
                   <div class="inte-CardBody__headerWrap-Action">
                        <button type="" class="inte-btn inte-btn--Secondary inte-btnExtraNarrow inte-btn--hasIcon">
                            <span class="inte-btn__icon">
                                <img src={HelpIcon} />
                            </span>
                            <span class="inte__text">{this.props.helpText}</span>
                        </button>
                    </div>
        		</div>
        	) ;
    }
}

export default CardHelp;