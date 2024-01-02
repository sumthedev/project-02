import React from "react";

function Messages() {
  return (
    <>
      <div className="flex mt-[50px] ">
        <div className="flex  flex-col  h-[600] mt-[20px] messages">
          <div
            className=" flex flex-row w-[318.02px] h-[50px] "
            style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
          >
            <span className="ml-[20px] mt-[5px]">
              <img src="/images/admin.svg" alt="admin" />
            </span>

            <div className="flex flex-row search-02 ml-[10px] mt-[8px]">
              <span className="w-[24px] h-[24px] mt-[6px] ml-[5px]">
                <img src="/images/icon.svg" alt="admin" />
              </span>
              <span className="text-11 mt-[3px]">Search</span>
            </div>
          </div>
          <div className="chats w-[357] flex flex-col">
            <span className="text-12 ml-[15px]  mt-[20px]">Chats</span>
            <div className="flex flex-row">
              <span className="mt-[15px] ml-[12px]">
                <img src="/images/avatar-05.png" alt="chat1" />
              </span>
              <div className="flex flex-col">
                <span className="chat-01 mt-[15px] ml-[10px]">
                  Helena Reynolds
                </span>
                <span className="tag ml-[8px] ">How To Set Intention</span>
              </div>
              <div className="flex flex-col ml-[80px] mt-[15px]">
                <span className="time">10:02AM</span>
                <span className="mt-[5px] ml-[18px]">
                  {" "}
                  <img src="/images/3.png" alt="3" />
                </span>
              </div>
            </div>
            <div className="flex-col active-02 mt-[8px] flex w-[340px] h-[59px]">
              <div className="flex flex-row">
                <span className="mt-[12px] ml-[12px]">
                  <img src="/images/avatar-06.png" alt="chat1" />
                </span>
                <div className="flex flex-col">
                  <span className="chat-02 mt-[13px] ml-[10px]">
                    Carrie Hawkins
                  </span>
                  <span className="tag-01 ml-[10px]">Motivate Yourself</span>
                </div>
                <div className="flex flex-col ml-[95px] mt-[15px]">
                  <span className="time-01">09:34PM</span>
                </div>
              </div>
            </div>
            <div className="flex-col mt-[8px] flex w-[318px] h-[59px]">
              <div className="flex flex-row">
                <span className="mt-[16px] ml-[12px]">
                  <img src="/images/avatar-07.png" alt="chat1" />
                </span>
                <div className="flex flex-col">
                  <span className="chat-01 mt-[13px] ml-[10px]">
                    Virginia Harper
                  </span>
                  <span className="tag ml-[10px]">A Starter Guide To Self</span>
                </div>
                <div className="flex flex-col ml-[70px] mt-[12px]">
                  <span className="time">02:27PM</span>
                  <span className="mt-[5px] ml-[18px]">
                    <img src="/images/8.png" alt="3" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-col mt-[8px] flex w-[318px] h-[59px]">
              <div className="flex flex-row">
                <span className="mt-[16px] ml-[12px]">
                  <img src="/images/avatar-08.png" alt="chat1" />
                </span>
                <div className="flex flex-col">
                  <span className="chat-01 mt-[13px] ml-[10px]">
                    Bobby Knight
                  </span>
                  <span className="tag ml-[10px]">It S A Habit</span>
                </div>
                <div className="flex flex-col ml-[115px] mt-[15px]">
                  <span className="time">09:34PM</span>
                </div>
              </div>
            </div>

            <div
              className="flex-col active-03 mt-[8px] flex w-[340px] h-[59px]"
              style={{ borderBottom: "1px solid #EBE9F1", marginRight: "10px" }}
            >
              <div className="flex flex-row">
                <span className="mt-[12px] ml-[12px]">
                  <img src="/images/avatar-09.png" alt="chat1" />
                </span>
                <div className="flex  flex-col mt-[-3px]">
                  <span className="chat-01 mt-[13px] ml-[10px]">
                    Caroline Soto
                  </span>
                  <span className="tag ml-[10px]">Choosing The Right...</span>
                </div>
                <div className="flex flex-col ml-[75px] mt-[12px]">
                  <span className="time">11:23AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[20px]  ">
          <div className="flex flex-row w-[732px] h-[57px] messages">
            <div className="flex flex-row">
              <span className="mt-[12px] ml-[12px]">
                <img src="/images/avatar-06.png" alt="chat1" />
              </span>

              <span className="chat-01 mt-[18px] ml-[10px]">
                Carrie Hawkins
              </span>
            </div>
            <div className="flex flex-row ml-[510px]">
              <span className="w-[24px] h-[24px] mt-[16px]">
                <img src="/images/icon.svg" alt="icon" />
              </span>
              <span className="mt-[16px] ">
                <img src="/images/icon-02.svg" alt="icon" />
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-[732px] active-chat h-[485px]">
              <div className="flex flex-row mt-[15px] ml-[400px]  h-[41px] w-[292px] back-color ">
                <span className="admin-text text-white mt-[10px] ml-[15px]">
                  {" "}
                  How can we help? We're here for you! 😄
                </span>
              </div>
              <div className="rounded-[8px] flex mt-[20px] ml-[20px]  flex-col w-[380px] h-[59px] bg-white ">
                <span className="user-text text-black mt-[10px] ml-[15px]">
                  {" "}
                  Hey John, I am looking for the best admin template. Could you
                  please help me to find it out? 😎
                </span>
                <div className=" w-[252px] mt-[20px] h-[75px] rounded-[5px] flex bg-white">
                  <span className="user-text text-black mt-[15px] ml-[15px]">
                    It should be Bootstrap 4 compatible.{" "}
                    <span className="text-white">
                      It should be Bootstrap 4 compatible.
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-[85px] h-[25px] bg-white mt-[85px] ml-[340px]">
                <span className="yesterday ml-[7px]">Yesterday</span>
              </div>

              <div className="flex flex-row mt-[15px] ml-[600px]  h-[41px] w-[100px] back-color ">
                <span className="admin-text text-white mt-[10px] ml-[15px]">
                  {" "}
                  Absolutely
                </span>
              </div>
              <div className="flex flex-row mt-[15px] ml-[312px]  h-[41px] w-[390px] back-color ">
                <span className="admin-text text-white mt-[10px] ml-[15px]">
                  {" "}
                  Vuexy admin is the responsive bootstrap 4 admin template.
                </span>
              </div>

              <div
                className="rounded-[8px] flex mt-[20px] ml-[20px]  
              flex-col w-[210px] h-[41px] bg-white "
              >
                <span className="user-text text-black mt-[10px] ml-[15px]">
                  {" "}
                  Looks clean and fresh UI. 😃
                </span>
              </div>
              <div className="w-[732px] flex flex-row bg-white h-[56px] mt-[20px]">
                <div className="w-[650px] ml-[15px] h-[33px] messages mt-[13px] rounded-[8px]">
                  <span className="footer-text ml-[15px] mt-[10px]">
                    Type your message or use speech to text
                  </span>
                </div>
                <div className="w-[85px] h-[33px] back-color ml-[20px] mt-[15px]">
                  <button className="button-02 text-white ml-[20px] mt-[8px]">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
