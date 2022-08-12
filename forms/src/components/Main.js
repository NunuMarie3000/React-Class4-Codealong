
import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state ={
      value: '',
      fruit: ''
    }
  }

  handleChange = (e)=> {
    this.setState({value: e.target.value}, console.log(e.target.value));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  }

  handleFruit = (e) =>{
    this.setState({fruit: e.target.value}, console.log(e.target.value));
  }

  render() {
    return (
      <>
      <h1>Welcome, {this.state.value}!</h1>
        <h2>Your favorite fruit is: {this.state.fruit}</h2>
        <form onSubmit={this.handleSubmit}>
        <label>Name: 
        <input type={'text'} value={this.state.value} onChange={this.handleChange} />
        </label><br/><br/>

        <label>Pick your fav fruit:
        <select value={this.state.fruit} onChange={this.handleFruit}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
        </label>

        <input type={'submit'} value={'Submit'}/>

        </form>
      </>
    )
  }
}
