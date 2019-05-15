import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

function TaskList ({ loading, tasks, onArchiveTask, onPinTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      { tasks.map(task => <Task key={ task.id } task={ task } { ...events } />) }
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default TaskList;
