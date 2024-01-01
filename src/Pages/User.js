import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data/mockUpdata";
import Pagination from "../components/Pagination";
import Actions from "../components/Actions";

let itemsPerPage = 5;

const rows = data;

function User() {
  const [currentPage, setCurrentPage] = useState(0);

  const rows = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePerPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleActions = (rowIndex) => {
  //   setClickedRow(rowIndex);
  // };
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
      <div className="flex content flex-col user-graph z-100  bg-05-shadow  mt-[30px]">
        <div
          className="flex flex-row "
          style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
        >
          <span className="text-04 mt-[16px] ml-[30px]">Users</span>
          <span className="mt-[1px] ml-auto">
            <button className="button-01 p-[10px] mt-[10px] mb-[10px]">
              <Link to="/form">+ Add User</Link>
            </button>
          </span>
        </div>
        <div
          className="flex flex-row pr-4 w-[1050px] h-[58px] "
          style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
        >
          <span className="text-05  mt-[18px] ml-[30px]">Show</span>
          <span className="text-06  mt-[22px] ml-[30px]">10</span>
          <span className=" mt-[20px] ml-[30px]">
            <img src="/images/up.svg" alt="up" />
          </span>
          <div
            className="search-bar mt-[6.5px] flex flex-row ml-[400px]
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
            <table className="w-full border-collapse">
              <thead
                className="head w-[1050px] h-[45px] "
                style={{
                  borderBottom: "2px solid #EBE9F1",
                  marginRight: "10px",
                }}
              >
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

                      <span className="ml-[10px] mt-[6px] ">EMAIL</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[10px] mt-[6px] ">PHONE NUMBER</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[10px] mt-[6px] ">EVENTS</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-row ">
                      <span className="flex-col">
                        <img src="/images/up-02.svg" alt="up" />
                        <img src="/images/down.svg" alt="down" />
                      </span>

                      <span className="ml-[10px] mt-[6px] ">FRIENDS</span>
                    </div>
                  </th>
                  <th>
                    {" "}
                    <span className="flex-row mr-[10px]">ACTIONS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr
                    key={index}
                    className=" w-[1050px] h-[58px] "
                    style={{
                      borderBottom: "2px solid #EBE9F1",
                      marginRight: "10px",
                    }}
                  >
                    <td>
                      <div className="flex items-center">
                        <img
                          src="/images/avatar-01.png"
                          alt="avatar"
                          className="ml-4"
                        />
                        <span className="text-07 ml-2">{item.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className="text-08">{item.email}</span>
                    </td>
                    <td>
                      <span className="text-09 ml-[40px]">
                        {item.phoneNumber}
                      </span>
                    </td>
                    <td>
                      <span className="text-09 ml-[40px]">{item.events}</span>
                    </td>
                    <td>
                      <span className="text-09 ml-[30px] ">{item.friends}</span>
                    </td>
                    <td>
                      <button
                        className="flex-row ml-[30px]"
                        onClick={() => handleActions(index)}
                      >
                        <img src="/images/shape.svg" alt="down" />
                      </button>
                      {openEventActionIndex === index && (
                        <div className="popover-container ">
                          <Actions />
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
}

export default User;
