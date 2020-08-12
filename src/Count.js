import React, { Fragment } from 'react';

// 값을 증가하고 감소시킬 수 있는 반응형 페이지
class Count extends React.Component{
    state = {
        number : 0
    }

    // State값의 증감을 다룸
    handleIncrease = () => {
        this.setState({
            number : this.state.number + 1
        });
    }
    handelDecrease = () => {
        this.setState({
            number : this.state.number - 1
        });
    }

    render() {
        return(
            <Fragment>
                <h1>Counter</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handelDecrease}>-</button>
            </Fragment>
        )
    }
}

export default Count;