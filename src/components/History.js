import React from "react";
import { v4 } from "uuid";
import { Button, Row, Col } from "reactstrap";
import "../styles.css";

class History extends React.Component {
  state = {
    history: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.entry !== prevProps.entry) {
      if (this.state.history.length > 5)
        this.setState({ history: this.state.history.splice(5, 1) });
      this.setState({ history: [this.props.entry, ...this.state.history] });
    }
  }

  onClick = () => {
    this.setState({ history: [] });
  };

  render() {
    const entries = this.state.history.map(elem => (
      <div key={v4()}>
        <ul>{elem}</ul>
      </div>
    ));

    return (
      <div>
        <Row className="hist">
          <Col>
            <h3>
              <u>History</u>
            </h3>
          </Col>
          <Col>
            <Button onClick={this.onClick} className="clear btn btn-danger">
              Clear
            </Button>
          </Col>
        </Row>
        <Row>
          <div className="history">{entries}</div>
        </Row>
      </div>
    );
  }
}

export default History;
