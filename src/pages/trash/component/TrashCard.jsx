const TrashCard = () => {
    return (
      <>
        <div className="note-card-container">
          <form>
            <div className="form-control">
              <div className="note-title">
                <h1>Note title</h1>
                <div className="note-title-action">
                  <span>meduim</span>
                  <span>
                    <i className="bx bxs-pin"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-control">
              <p>noteContent Many of life'they</p>
            </div>
            <div className="note-date">
              <p>Created on 26/10/2020</p>
              <div className="note-action-container">
                <button>
                  <i className="bx bx-trash-alt"></i>
                </button>
                <button>
                  <i className="bx bx-archive-out"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export { TrashCard };
  