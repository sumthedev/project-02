function UserTable() {
  return (
    <>
      <div className="flex flex-col mt-[20px]">
        <span className="flex ml-[20px]">Recent Users</span>

        <div className="flex mt-[20px] ml-[20px] mr-[20px]">
          <table id="customers">
            <tr>
              <th>User</th>
              <th>Going</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Events</th>
            </tr>
            <tr>
              <td className=" user-name">Dana Boyer</td>
              <td className="user-text user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
            <tr>
              <td className="user-name">Melody Macy</td>
              <td className="user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
            <tr>
              <td className="user-name">Max Smith</td>
              <td className="user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
            <tr>
              <td className=" user-name">Sean Bean</td>
              <td className="user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
            <tr>
              <td className=" user-name">Brian Cox</td>
              <td className="user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
            <tr>
              <td className=" user-name">Mikaela Collins</td>
              <td className="user-text">Wed Aug 30 15:30</td>
              <td className="user-text">joe@gmail.com</td>
              <td className="user-text">+92-3334567</td>
              <td className="user-text">02</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;
