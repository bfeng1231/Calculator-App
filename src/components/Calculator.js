import React from "react";
import History from "./History";
import { Button, Container, Row, Col } from "reactstrap";
import "../styles.css";

class Calculator extends React.Component {
  state = {
    value: "",
    newEntry: ""
  };

  onClick = input => {
    console.log(input);
    this.setState({ value: this.state.value + input });
  };

  onEnter = () => {
    console.log("enter");
    if (this.state.value === "") return;
    try {
      let ans = String(eval(this.state.value));
      this.setState({ newEntry: this.state.value + "=" + ans, value: ans });
      //if (ans === "NaN" || "Infinity") return this.setState({ value: "" });
    } catch (error) {
      console.error(error);
      this.setState({ value: this.state.value });
    }
  };

  onDelete = () => {
    this.setState({
      value: this.state.value.substr(0, this.state.value.length - 1)
    });
  };

  onClear = () => {
    console.log("clear");
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="calculator">
              <div className="screen">{this.state.value}</div>
              <br />
              <div className="calc">
                <Row className="justify-content-start">
                  <Button onClick={this.onClear} className=" btn btn-danger">
                    Clear
                  </Button>
                  <Button onClick={this.onDelete} className=" btn btn-warning">
                    Del
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, "/")}
                    className=" btn btn-light"
                  >
                    /
                  </Button>
                </Row>
                <Row className="justify-content-start">
                  <Button
                    onClick={this.onClick.bind(this, 7)}
                    className=" btn btn-light"
                  >
                    7
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 8)}
                    className=" btn btn-light"
                  >
                    8
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 9)}
                    className=" btn btn-light"
                  >
                    9
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, "*")}
                    className=" btn btn-light"
                  >
                    *
                  </Button>
                </Row>
                <Row className="justify-content-start">
                  <Button
                    onClick={this.onClick.bind(this, 4)}
                    className=" btn btn-light"
                  >
                    4
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 5)}
                    className=" btn btn-light"
                  >
                    5
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 6)}
                    className=" btn btn-light"
                  >
                    6
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, "-")}
                    className=" btn btn-light"
                  >
                    -
                  </Button>
                </Row>
                <Row className="justify-content-start">
                  <Button
                    onClick={this.onClick.bind(this, 1)}
                    className=" btn btn-light"
                  >
                    1
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 2)}
                    className=" btn btn-light"
                  >
                    2
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, 3)}
                    className=" btn btn-light"
                  >
                    3
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, "+")}
                    className=" btn btn-light"
                  >
                    +
                  </Button>
                </Row>
                <Row className="last-col">
                  <Button
                    onClick={this.onClick.bind(this, 0)}
                    className=" btn btn-light"
                  >
                    0
                  </Button>
                  <Button
                    onClick={this.onClick.bind(this, ".")}
                    className=" btn btn-light"
                  >
                    .
                  </Button>
                  <Button onClick={this.onEnter} className=" btn btn-light">
                    =
                  </Button>
                </Row>
              </div>
            </Col>
            <Col>
              <History entry={this.state.newEntry} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calculator;
