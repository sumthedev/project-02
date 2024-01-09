import { Link } from "react-router-dom";
import Card from "../components/Card";

function View() {
  return (
    <>
      <div className="flex flex-col mt-[50px] w-full p-[10px]">
        <div className="flex w-full flex-row bg-02 mt-[20px] ">
          <div className="flex ml-[20px] mt-[12px]">
            <span>
              <img src="/images/view-01.png" alt="view" />
            </span>
          </div>
          <div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <span className="text-black text-13 flex ml-[8px]">
                Joe David
              </span>
              <span className="text-14 ml-[8px] mt-[5px] flex">
                joedavid@gmail.com
              </span>
              <div className="flex mt-[8px] ml-[-5px] flex-row w-[363px]  h-[97px]">
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px] bg-white">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-15">45,0000</span>
                    <span className="text-16 flex mt-[8px]">Friends</span>
                  </div>
                </div>
                <div className="flex item-01 w-[167px] h-[77px] ml-[8px] mt-[10px]">
                  <div className="flex flex-col mt-[12px] ml-[29px]">
                    <span className="text-17">75</span>
                    <span className="text-18 flex mt-[8px]">Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex back-color mt-[20px]  ml-[400px] w-[50px] h-[33px]">
            <button>
              <span className="flex ml-[12px]  text-sm text-white">
                <Link to="/edit">Edit</Link>
              </span>
            </button>
            <button className="">
              <span className="flex ml-[20px] w-[27px] h-[27px]">
                <img src="/images/view-02.png" alt="view" />
              </span>
            </button>
          </div>
        </div>
        <div className="bg-02 w-[1005] mt-[20px] flex flex-row h-[290px]">
          <div className="flex ml-[20px] mt-[18px] w-[250px] h-[280]">
            <span>
              <img src="/images/view-03.png" alt="view" />
            </span>
          </div>
          <div className="flex flex-col ml-[20px] mt-[20px] ">
            <span className="text-19 ml-[18px]">User Details</span>
            <div className=" mt-[20px] flex flex-col w-[629px] h-[182px]">
              <div className="flex flex-row ">
                <span className="flex text-18 ml-[20px] mt-[12px]">
                  Username
                </span>
                <span className="flex text-20 ml-[150px] mt-[10px]">
                  Joe David
                </span>
              </div>
              <div className="flex flex-row ">
                <span className="flex text-18 mt-[40px] ml-[20px]">Email</span>
                <span className="flex text-18 mt-[40px] ml-[190px]">
                  joedavid@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-[-50px]">
              <span className="flex text-18 ml-[20px]">Phone Number</span>
              <span className="flex text-20 ml-[120px]">+92-3345679</span>
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

export default View;
