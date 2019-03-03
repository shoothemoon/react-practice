import React, {
  Component
} from 'react';

class Counter extends Component {
  state = {
    count: 0,
    clickPower: 1,
   };

  incrementCount = () => {
    var newCount = this.state.count + this.state.clickPower
    this.setState({
      count: newCount
    })
  }

  handleClick = () => {
    this.incrementCount()
  }

  handleSpend(amount) {
    if( this.state.count >= amount) {
      var newCount = this.state.count - amount;
      var newClickPower = this.state.clickPower + amount / 10;

      this.setState({
        count: newCount,
        clickPower: newClickPower,
      })
    }
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    var count = this.state.count;
    classes += (count >= 10) ? "primary" : "warning";
    return classes;
  }

  render() {
    return (
      <div>
        <div>
        <button
          onClick={() => this.handleClick()}
          className="btn btn-secondary btn-sm">
          Increment
        </button>

        <button
          onClick={() => this.handleSpend(10)}
          className="btn btn-warning btn-sm">
          Spend 10
        </button>

        <button
          onClick={() => this.handleSpend(100)}
          className="btn btn-primary btn-sm">
          Spend 100
        </button>

        <button
          onClick={() => this.handleSpend(1000)}
          className="btn btn-secondary btn-sm">
          Spend 1000
        </button>

        <button
          onClick={() => this.handleSpend(10000)}
          className="btn btn-danger btn-sm">
          Spend 10000
        </button>

      </div>

      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
      </div>

      </div>
      );
    }
}

export default Counter;
