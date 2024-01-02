import Chart from "../components/Chart";
import UserTable from "../components/UserTable";
import SmallChart from "../components/Area-Chart";
import Circle from "../components/PieChart";

import TubeChart from "../components/TubeChart";
function Dashboard() {
  return (
    <>
      <div className="flex w-full  mt-[50px]">
        <div className="w-full">
          <div className="flex gap-10 ">
            <div className="flex flex-col gap-10 ">
              <div className="flex gap-10 ">
                <div className="w-[164px] h-[180px] bg-01 bg-02-shadow">
                  <div className="flex-col p-[10px]">
                    <div>
                      <span className="text-27 ml-[8px] ">Events</span>
                    </div>
                    <div>
                      <span className="text-28 ml-[8px] ">261</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <TubeChart />
                    </div>
                  </div>
                </div>

                <div className="w-[164px] h-[180px] bg-01 p-[10px]  bg-02-shadow flex-col">
                  <div>
                    <span className=" flex ml-[5px]">
                      <img src="/images/user-icon.svg" alt="icon" />
                    </span>

                    <div className="text-27 ml-[8px] mt-[5px]">User</div>
                    <div className="text-28 ml-[8px] mt-[5px]">256</div>
                  </div>
                  <div>
                    <SmallChart />
                  </div>
                </div>
              </div>
              <div className=" w-[356px] h-[160px]  bg-01 bg-02-shadow">
                <div className="flex justify-between p-[10px]">
                  <div>
                    <div style={{ marginTop: "10px" }}>
                      <span className="text-27 ml-[10px]">Events</span>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <span className="text-28 ml-[10px] ">205</span>
                    </div>

                    <p className="text-29" style={{ marginTop: "30px" }}>
                      <b>68.2%</b> more events than last month
                    </p>
                  </div>

                  <div style={{ position: "relative" }} className="mt-[10px] ">
                    {<Circle />}
                    <div
                      style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        inset: "39% 62% 46% 37%",
                      }}
                    >
                      <span className="text-27  mb-[46px]">68.2%</span>
                      <span
                        style={{ marginLeft: "-1px" }}
                        className="mt-[-50px] text-30 "
                      >
                        Events
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[67%] bg-01 bg-02-shadow">
              <div className="card3">
                <div className="flex flex-col">
                  <span className="font-02 ml-[21.12px] mt-[19.11px]">
                    Event Posting
                  </span>
                  <span className="font-002 ml-[21.12px] mt-1">
                    2023 Total Events: 12.8k
                  </span>
                  <div
                    style={{ marginTop: "30px" }}
                    className="ml-[-20px] w-full "
                  >
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-10 mt-10">
            <div className="w-[70%] bg-01 bg-02-shadow">
              <UserTable />
            </div>
            <div className="w-[30%] bg-01 bg-02-shadow">
              <div className="flex flex-col">
                <div className="flex mt-[20px] ml-[20px]">
                  <span className="ml-[20px] mt-[20px]">Top Events</span>
                </div>
                <div className="w-[308px] flex-col h-[268px] ml-[20px] mt-[20px]">
                  <div className="flex flex-row  ">
                    <span className="ml-[20px]">
                      <img src="/images/top-event.png" alt="top-event" />
                    </span>
                    <span className="ml-[5px] mt-[10px]">Funeral Option</span>
                    <div className="w-[61px]  h-[36px] text-25 ml-[40px] mt-[8px] last">
                      <span className="flex ml-[8px] text-26  mt-[10px]">
                        20000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row mt-[20px] ">
                    <span className="ml-[20px]">
                      <img src="/images/top-event.png" alt="top-event" />
                    </span>
                    <span className="ml-[5px] mt-[10px]">Funeral Option</span>
                    <div className="w-[61px]  h-[36px] text-25 ml-[40px] mt-[8px] last">
                      <span className="flex ml-[8px] text-26  mt-[10px]">
                        20000
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row mt-[20px] ">
                    <span className="ml-[20px]">
                      <img src="/images/top-event.png" alt="top-event" />
                    </span>
                    <span className="ml-[5px] mt-[10px]">Funeral Option</span>
                    <div className="w-[61px]  h-[36px] text-25 ml-[40px] mt-[8px] last">
                      <span className="flex ml-[8px] text-26  mt-[10px]">
                        20000
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row mt-[20px] ">
                    <span className="ml-[20px]">
                      <img src="/images/top-event.png" alt="top-event" />
                    </span>
                    <span className="ml-[5px] mt-[10px]">Funeral Option</span>
                    <div className="w-[61px]  h-[36px] text-25 ml-[40px] mt-[8px] last">
                      <span className="flex ml-[8px] text-26  mt-[10px]">
                        20000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
