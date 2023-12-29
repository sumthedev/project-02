import { Link } from "react-router-dom";
import Card from "../components/Card";

function Eventedit() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row bg-02 mt-[20px] w-[1005px] h-[210px]">
          <div className="flex mt-[12px] ml-[20px]">
            <span>
              <img src="/images/event.png" alt="view" />
            </span>
          </div>
          <div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <span className="text-black text-13 flex ml-[8px]">
                Vacation Event
              </span>
              <span className=" flex-row text-14 ml-[8px] mt-[5px] flex">
                <span className="flex ">Created By:</span>
                <span className="flex ml-[3px] text-black"> joedavid</span>
              </span>
              <span className=" flex-row text-14 ml-[8px] mt-[5px] flex">
                <span className="flex ">Event Type:</span>
                <span className="flex ml-[3px] text-black"> PlayJoy</span>
              </span>
              <div className="flex mt-[8px] ml-[-5px]  flex-row w-[753px]  h-[97px]">
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px] bg-white">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-15">Islamabad</span>
                    <span className="text-16 flex mt-[8px]">Location</span>
                  </div>
                </div>
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px]">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-17">10 SEP</span>
                    <span className="text-18 flex mt-[8px]">Date</span>
                  </div>
                </div>
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px]">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-17">20000</span>
                    <span className="text-18 flex mt-[8px]">Comments</span>
                  </div>
                </div>
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px]">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-17">200</span>
                    <span className="text-18 flex mt-[8px]">Interested</span>
                  </div>
                </div>
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px]">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-17">200</span>
                    <span className="text-18 flex mt-[8px]">Going</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex back-color mt-[20px]  ml-[-150px] w-[110px] h-[40px]">
            <Link to="/event-view">
              <button>
                <span className="flex ml-[12px] flex-row mt-[10px]  text-sm text-white">
                  Save <span className="flex ml-[2px]  ">Changes</span>
                </span>
              </button>
            </Link>
            <button className="">
              <span className="flex ml-[20px] w-[27px] h-[27px]">
                <img src="/images/view-02.png" alt="view" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-02 w-[1005] mt-[20px] flex flex-row h-[390px]">
          <div className="flex ml-[20px] mt-[18px] w-[250px] h-[280]">
            <span>
              <img src="/images/event-01.png" alt="view" />
            </span>
          </div>
          <div className="flex flex-col ml-[20px] mt-[20px] ">
            <span className="text-19 ml-[18px]">Event Details</span>
            <div className=" mt-[20px] flex flex-col w-[629px] h-[182px]">
              <div className="flex flex-row ">
                <span className="flex text-18 ml-[20px] mt-[12px]">
                  Event Name
                </span>
                <span className="flex text-20 ml-[180px] mt-[10px]">
                  Vacation Event
                </span>
              </div>
              <div className="flex flex-row ">
                <span className="flex text-18 mt-[40px] ml-[20px]">
                  {" "}
                  Event type
                </span>
                <span className="flex text-20 mt-[40px] ml-[190px]">
                  PlayDate
                </span>
              </div>
              <div className="flex flex-row ">
                <span className="flex text-18 mt-[40px] ml-[20px]"> Date</span>
                <span className="flex text-20 mt-[40px] ml-[235px]">
                  10 SEP
                </span>
              </div>
              <div className="flex flex-row ">
                <span className="flex text-18 mt-[20px] ml-[20px]">
                  {" "}
                  Comments
                </span>
                <span className="flex text-20 mt-[20px] ml-[190px]">
                  Location
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-[50px]">
              <span className="flex text-18 ml-[20px]">Description</span>
              <span className="flex text-20 ml-[180px]">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              </span>
            </div>
          </div>
        </div>
        <div className="flex ml-[20px] mt-[12px]">
          <span className="text-23">Events</span>
        </div>
        <Card />
      </div>
    </>
  );
}

export default Eventedit;
