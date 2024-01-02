import { useEffect, useRef, useState } from "react";
import { eventData } from "../data/mockUpdata";
import Pagination from "../components/Pagination";
import EventAction from "../components/Action-02";

let itemsPerPage = 5;
const data = eventData;

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const rows = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePerPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [openEventActionIndex, setOpenEventActionIndex] = useState(null);
  const popoverRef = useRef(null);

  const handleActions = (index) => {
    setOpenEventActionIndex(openEventActionIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setOpenEventActionIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Add openEventActionIndex to the dependency array if needed

  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  return (
    <>
      <div className="bg-05-shadow w-full  mt-[50px]">
        <div
          className="flex flex-row p-[14px] "
          style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
        >
          <span className="text-04 mt-[12px] ml-[30px]">Events</span>
        </div>
        <div
          className="flex flex-row p-[14px] "
          style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
        >
          <span className="text-05  mt-[18px] ml-[30px]">Show</span>
          <span className="text-06  mt-[22px] ml-[30px]">10</span>
          <span className=" mt-[20px] ml-[30px]">
            <img src="/images/up.svg" alt="up" />
          </span>
          <div
            className="search-bar mt-[6.5px] flex flex-row ml-[500px]
         bg-03-shadow "
          >
            <div className="flex flex-row ">
              <span className="ml-5 mt-1">
                <img src="/images/search-normal.svg" alt="search" />
              </span>
              <input
                className="ml-2 input-01"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <table id="table-01">
              <thead className="head">
                <tr>
                  <th>
                    <span className="ml-4">NAME</span>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-3 mt-[6px]">TIME & LOCATION</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row  ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[5px] mt-[6px]">USER</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[5px] mt-[6px]">COMMENTS</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row">
                      <span className="flex-col ml-[20px]">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[5px] mt-[6px]">GOING</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[5px] mt-[6px] ">INTERESTED</span>
                    </div>
                  </th>
                  <th>
                    {" "}
                    <span>ACTIONS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr
                    key={index}
                    className=" w-full  "
                    style={{
                      borderBottom: "2px solid #EBE9F1",
                    }}
                  >
                    <td>
                      <div className="flex items-center">
                        <img
                          src="/images/avatar-03.png"
                          alt="avatar"
                          className="ml-4"
                        />
                        <span className="text-07 ml-2">{item.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="text-08 mr-[120px]">{item.time}</span>
                    </td>
                    <td>
                      <span className="text-08 mr-[105px]">{item.user}</span>
                    </td>
                    <td>
                      <span className="text-09 ml-[30px]">{item.comments}</span>
                    </td>
                    <td>
                      <span className="text-09  ml-[45px]">{item.going}</span>
                    </td>
                    <td>
                      <span className="text-09  ml-[50px]">
                        {item.interested}
                      </span>
                    </td>
                    <td>
                      <button
                        className="flex-row ml-[30px]"
                        onClick={() => handleActions(index)}
                      >
                        <img src="/images/shape.svg" alt="down" />
                      </button>
                      {openEventActionIndex === index && (
                        <div className="popover-container-2">
                          <EventAction />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="">
                <tr>
                  <td className="text-10 " colSpan="">
                    <span className=" text-white flex flex-col ml-[30px]">
                      Showing {currentPage * itemsPerPage + 1} to{" "}
                      {Math.min((currentPage + 1) * itemsPerPage, data.length)}{" "}
                      of {data.length} entries
                    </span>
                    <span className=" flex flex-col ml-[30px]">
                      Showing {currentPage * itemsPerPage + 1} to{" "}
                      {Math.min((currentPage + 1) * itemsPerPage, data.length)}{" "}
                      of {data.length} entries
                    </span>
                  </td>
                </tr>

                <Pagination
                  currentPage={currentPage}
                  numberOfPages={numberOfPages}
                  handlePerPage={handlePerPage}
                />
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
