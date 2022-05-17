const EmptyArchive = () => {
    return (
      <div className="emptyTrashContatiner">
        <ul>
          <li className="trash-list">
          <i class='bx bx-archive-in' ></i>
            <h1>No notes in Archive</h1>
          </li>
        </ul>
      </div>
    );
  };
  
  export { EmptyArchive };
