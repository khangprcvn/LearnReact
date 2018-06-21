import React , {Component} from 'react';
import Temperature from '../Temperature/Temperature';
import ToCelsius from '../BoilingVerdict/ToCelsius';
import ToFahrenheit from '../BoilingVerdict/ToFahrenheit';
import TryCovert from '../BoilingVerdict/TryCovert';
class Calculator extends Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? TryCovert(temperature, ToCelsius) : temperature;
      const fahrenheit = scale === 'c' ? TryCovert(temperature, ToFahrenheit) : temperature;
  
      return (
        <div>
          <Temperature
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
  
          <Temperature
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
        </div>
      );
    }
  }
export default Calculator;