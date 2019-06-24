import { withFormsy } from 'formsy-react';
import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }
  
    changeValue(event) {

        this.props.setValue(event.currentTarget.value);
        this.props.changeHandler(event)
    }
  
    render() {
      
      const { type, getValue, name, className  } = this.props;
      const errorMessage = this.props.getErrorMessage();
      return (
        <div>
          <input
            onChange={this.changeValue}
            type={type}
            value={getValue() || ''}
            name={name}
            className={className}
          />
          <span className="text-danger">{errorMessage}</span>
        </div>
      );
    }
  }
  
  export default withFormsy(Input);