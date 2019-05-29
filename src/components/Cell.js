import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};


class Cell extends React.Component {
  constructor() {
    super();

    this.state = {
      cell: cellStyle,
    };
  }

  onHover = () => {
    var newCell = {...this.state.cell, backgroundColor: "#00FFFF"};
    this.setState({ cell: newCell });
  }

  onOut = () => {
    var newCell = {...this.state.cell, backgroundColor: "white"};
    this.setState({ cell: newCell });
  }

  render() {
    return <div
              style={this.state.cell}
              onMouseOver={ this.onHover }
              onMouseOut={ this.onOut }
              onClick={ this.props.updCell }
            >
              { this.props.cell }
            </div>;
  }
}

export default Cell;
