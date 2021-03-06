import React, { Component } from 'react'

class FoodSummary extends Component {

  deleteItem = (index) => {
    this.props.removeItem(index)
  }

  render() {
    return (
      <div className="FoodSummary">
        <h2>Today's foods</h2>
        {
          (this.props.consumedFoods.length > 0) &&
          <ul>
            {this.props.consumedFoods.map((el, i) => (
              (el.quantity > 0) &&
              <li key={i}>{el.quantity} {el.name} = {el.calories*el.quantity} cal 
              <a onClick={() => this.deleteItem(i)}>🗑</a>
              </li>
            ))}
          </ul>
        }
        {
          (this.props.consumedFoods.length > 0) &&
          <strong>Total: 
            {this.props.consumedFoods.map(el => el.quantity*el.calories).reduce((ac, cv) => ac + cv, 0)}
             cal</strong>
        }
      </div>
    )
  }
}

export default FoodSummary;