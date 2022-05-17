import HtmlParser from "react-html-parser/lib/HtmlParser";

const ArchiveCard = ({ archiveData }) => {
  const getDate = (date) => {
    const currTime = date.slice(11, 16);
    const currDate = date.slice(0, 10).split("-").reverse().join("-");
    return ` ${currDate} ${currTime}`;
  };

  return (
    <>
      <div
        className={`note-card-container ${archiveData.color}`}
        key={archiveData._id}
      >
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>{archiveData.title}</h1>
              <div className="note-title-action">
                <span>{archiveData.priority}</span>
                <button className="pin-btn" title="Pin">
                  <i
                    className={`${
                      archiveData.isPinned ? "bx bxs-pin" : "bx bx-pin"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="form-control">
            <div>{HtmlParser(archiveData.content)}</div>
          </div>
          <div className="note-date">
            <p>{getDate(archiveData.date)}</p>
            <div className="note-action-container">
              <button>
                <i className="bx bx-trash-alt"></i>
              </button>
              <button>
                <i className="bx bx-upvote"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { ArchiveCard };
