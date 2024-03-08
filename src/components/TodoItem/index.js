import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
