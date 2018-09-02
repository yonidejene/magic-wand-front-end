import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Card, Button, Modal } from "antd";

//need this to bind ref??
const CompanyContainer = styled.div`
  margin: 10px;
`;

export default class Company extends React.Component {
  state = {
    open: false
  };

  handleView = () => {
    this.setState({ open: !this.state.open });
    //console.log(this.state);
  };

  handleOk = () => {
    //console.log(e);
    this.setState({
      open: false
    });
  };

  handleCancel = () => {
    //console.log(e);
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Company Name"
          visible={this.state.open}
          okText={"Assign Partner"}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some content about company ...</p>
          <p>Some content about company ...</p>
          <p>Some content about company ...</p>
        </Modal>
        <Draggable draggableId={this.props.company.id} index={this.props.index}>
          {(provided, snapshot) => (
            <CompanyContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <Card>
                <h3>Company Name </h3>
                <p>{this.props.company.content} </p>
                <Button
                  style={{ float: "right" }}
                  type="primary"
                  onClick={this.handleView}
                >
                  View
                </Button>
              </Card>
            </CompanyContainer>
          )}
        </Draggable>
      </div>
    );
  }
}
