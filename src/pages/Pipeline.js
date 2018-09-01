import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import Column from "../components/Column.js";

/* TODO
1. Create four column layout
2. Create draggable cards with 
    a) Avatars
    b) View Profile 
3. Open Modal on View Profile click and pass in the company ID to do API Call
4. When card is dragged change the status of company
5. Conditional render of buttons based on company status (Reject + Defer, Schedule Pitch, Submit Prevote, Submit Final Vote)
*/

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Company #1 description goes here" },
    "task-2": { id: "task-2", content: "Company #2 description goes here" },
    "task-3": { id: "task-3", content: "Company #3 description goes here" },
    "task-4": { id: "task-4", content: "Company #4 description goes here" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "New Applications",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Pre-Pitch",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Check In Later",
      taskIds: []
    },
    "column-4": {
      id: "column-4",
      title: "Pitching",
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};

const AppContainer = styled.div`
  display: flex;
`;

const Layout = styled.div`
  display: grid;
  justify-items: center;
  grid-column-gap: 2vh;
`;

export default class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome
        }
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <Navbar>
        <Layout>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <AppContainer>
              {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => this.state.tasks[taskId]
                );

                return <Column key={column.id} column={column} tasks={tasks} />;
              })}
            </AppContainer>
          </DragDropContext>
        </Layout>
      </Navbar>
    );
  }
}
