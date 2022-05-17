import HtmlParser from "react-html-parser/lib/HtmlParser";
const TrashCard = ({trashData}) => {

  const getDate = (date) => {
    const currTime = date.slice(11, 16);
    const currDate = date.slice(0, 10).split("-").reverse().join("-");
    return ` ${currDate} ${currTime}`;
  };
    return (
      <>
      <div className={`note-card-container ${trashData.color}`} key={trashData._id}>
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>{trashData.title}</h1>
              <div className="note-title-action">
                <span>{trashData.priority}</span>
                <button
                  className="pin-btn"
                  title="Pin"
                >
                  <i
                    className={`${trashData.isPinned ? "bx bxs-pin" : "bx bx-pin"}`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-control">
            <div>{HtmlParser(trashData.content)}</div>
          </div>
          <div className="note-date">
            <p>{getDate(trashData.date)}</p>
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
  