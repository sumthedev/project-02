import { Link } from "react-router-dom";

const handleDel = () => {
  alert("We add the functionality soon");
};

function EventAction() {
  return (
    <>
      <div className="bg-01 bg-shadow-01 flex flex-col p-[1rem] w-[159px] [h-196px] ">
        <div className="flex flex-row">
          <span>
            <Link
              to="/event-view
            "
            >
              <button>
                <img src="/images/view.svg" alt="edit"></img>
              </button>
            </Link>
          </span>
          
        </div>

        <span>
          <Link to="/event-edit">
            <button className="ml-[5px] ">
              <img src="/images/edit.svg" alt="edit"></img>
            </button>
          </Link>
        </span>

        <span>
          <button className="ml-[5px] " onClick={handleDel}>
            <img src="/images/delete.svg" alt="del"></img>
          </button>
        </span>
      </div>
    </>
  );
}

export default EventAction;
