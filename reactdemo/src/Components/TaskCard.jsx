import PropTypes from 'prop-types';

export default function TaskCard(props = {}) {
  return (
    <div className='task-card'>
      <div className='task-card-header'>
      <h3>{props.data.title}</h3>
      <button onClick={() => props.handleAddNewTask(props.data.title)}>Add</button>
      </div>
      <ul>
          {
            props.data.task.map((item, index) => <li onClick={() => props.handlecompletion(props.data.title, item.title)} className="list-item" key={index}>{item.isCompleted && <span>️✅</span>}<span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.title}</span></li>)
          }
      </ul>
      </div>
  )
}

TaskCard.propTypes = {
    data: PropTypes.object,
    handleCompletion: PropTypes.func,
    handleAddNewTask: PropTypes.func,
};


