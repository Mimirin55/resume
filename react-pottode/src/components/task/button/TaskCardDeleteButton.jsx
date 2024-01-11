import React from 'react';

export const TaskCardDeleteButton = ({
    taskCardsList, 
    setTaskCardsList,
    taskCard,
  }) => {
    const TaskCardDeleteButton = (id) => {
    // タスクカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id ))
  }
  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() =>
        TaskCardDeleteButton(taskCard.id)}>
      <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
