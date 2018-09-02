import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Company from "./Company.js";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  background-color: #e6e6e9;
`;

const Title = styled.h3`
  padding: 15px;
  background-color: #0702d1;
  color: white;
`;
const CompanyList = styled.div`
  flex-grow: 1;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title> {this.props.column.title} </Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <CompanyList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.companies.map((company, index) => (
                <Company key={company.id} company={company} index={index} />
              ))}
              {provided.placeholder}
            </CompanyList>
          )}
        </Droppable>
      </Container>
    );
  }
}
