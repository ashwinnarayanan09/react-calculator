import React, {Component} from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            value3: 0,
            operation: "sum",
            result: 0
        }
        this.valueChange1 = this.valueChange1.bind(this);
        this.valueChange2 = this.valueChange2.bind(this);
        this.valueChange3 = this.valueChange3.bind(this);
        this.operationChange = this.operationChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    valueChange1(event) {
        console.log("value1");
        this.setState({value1: event.target.type === 'number' ? parseInt(event.target.value) : 0}, () => {
            this.calculate()
        });
        //this.calculate();

    }

    valueChange2(event) {
        this.setState({value2: parseInt(event.target.value)}, () => {
            this.calculate()
        });

    }

    valueChange3(event) {
        this.setState({value3: parseInt(event.target.value)}, () => {
            this.calculate()
        });

    }

    operationChange(event) {

        this.setState({operation: event.target.value}, () => {
            this.calculate()
        });

    }

    calculate() {
        let res = 0;
        if (this.state.operation == "sum")
            res = this.state.value1 + this.state.value2 + this.state.value3;
        else
            res = this.state.value1 * this.state.value2 * this.state.value3;

        this.setState({result: res});
    }


    render() {
        return (
            <div className="container-fluid">

                <div className="row">

                    <div className="col-3-md">
                        <div className="form-group">
                            <label htmlFor="value1">Value1:</label>
                            <input type="number" className="form-control" onInput={this.valueChange1} id="value1"
                                   name="value1"/>
                        </div>
                    </div>

                    <div className="col-3-md">
                        <div className="form-group">
                            <label htmlFor="value2">Value2:</label>
                            <input type="number" className="form-control" id="value2" name="value2"
                                   onInput={this.valueChange2}/>
                        </div>
                    </div>
                    <div className="col-3-md">
                        <div className="form-group">
                            <label htmlFor="value3">Value3:</label>
                            <input type="number" className="form-control" id="value3" name="value3"
                                   onInput={this.valueChange3}/>
                        </div>
                    </div>

                    <div className="col-3-md" id="result">
                        <div className="radio">
                            <label><input type="radio" name="sum" value="sum"
                                          onChange={this.operationChange} checked={this.state.operation =="sum"}/>Sum</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="multiply" value="multiply"
                                          onChange={this.operationChange} checked={this.state.operation =="multiply"}/>Multiply</label>
                        </div>

                        <strong>Result:{this.state.result}</strong>

                    </div>


                </div>

            </div>

        );
    }
}

export default Calculator;
