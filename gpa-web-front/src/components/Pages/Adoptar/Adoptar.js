import React, {Component} from 'react';
import './Adoptar.css';


class PagAdoptar extends Component
{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("onChange: " + event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("onSubmit: ", this.state.value);
    
  }

  render() {
    return(
      <div className="pag-adoptar">
        <h1>Página de adopción con cátalogo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit"  />
        </form>
        
      </div>
    )
  }
}

export default PagAdoptar
