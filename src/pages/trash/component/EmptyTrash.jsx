import "./empty-trash.css";

const EmptyTrash = () => {
  return (
    <div className="emptyTrashContatiner">
      <ul>
        <li className="trash-list">
        <i className='bx bx-trash-alt'></i>
          <h1>No notes in trash</h1>
        </li>
      </ul>
    </div>
  );
};

export { EmptyTrash };
