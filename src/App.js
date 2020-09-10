import React, {Component} from 'react';
import Installation1 from './InstallStep1';
import Installation2 from './InstallStep2';
import Installation3 from './InstallStep3';
import './General.css';

class App extends Component {
    render() {
        return (
             <div className="inte inte-wrapper inte-onbaord">  
                    <Installation1></Installation1>
                    <Installation2></Installation2>
                    <Installation3></Installation3>
             </div>
        );
    }
}

export default App;