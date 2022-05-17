const TrashCard = () => {
    return (
      <>
      <div className="note-card-container">
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>title</h1>
              <div className="note-title-action">
                <span>priority</span>
                <button
                  className="pin-btn"
                  title="Pin"
                >
                  <i
                    // className={`${note.isPinned ? "bx bxs-pin" : "bx bx-pin"}`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-control">
            <div>content</div>
          </div>
          <div className="note-date">
            <p>date</p>
            <div className="note-action-container">
              <button>
                <i className="bx bx-pencil"></i>
              </button>
              <button>
                <i className="bx bx-archive-in"></i>
              </button>
              <button>
                <i className="bx bx-trash-alt"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
    );
  };
  
  export { TrashCard };
  