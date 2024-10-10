

import { useAppSelector , useAppDispatch } from "../../app/hook";
import { logout } from "../../features/authSlice";

//css
import "../../css/UserDashboard.css"
import { Link } from "react-router-dom";

//icons
import { FaCartShopping , FaHeart, FaUser, FaLocationDot, FaMoneyBill,  } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";



const UserDashboard = () => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state)=>state.auth);


    //
    const handleLogout = () => {
        dispatch(logout());
        
    }

  return (
    <>
    
     <div id="user-dashboard">
         <div className="user-dashboard-inner">


            <div className="user-header">
              <div className="left">
               <figure className="m-0">{user && <img src={user?.image} />}</figure>
              <div className="name">
                  <p>Hello</p>
                  <p>{user?.name}</p>
              </div>
              </div>
              <div className="right">
                <button onClick={handleLogout}>Logout</button>
              </div>
            
            </div>

           <div className="user-menus">
              <div className="orders"><Link to={`/`}>
              <span className=""><FaCartShopping /></span>
              <span>orders</span>
              </Link></div>

              <div className="wishlist"><Link to={`/`}>
              <span className=""><FaHeart /></span>
              <span>orders</span>
              </Link></div>

              <div className="edit-profile"><Link to={`/`}>
              <span className=""><FaUser  /></span>
              <span>orders</span>
              </Link></div>

              <div className="address"><Link to={`/`}>
              <span className=""><FaLocationDot /></span>
              <span>orders</span>
              </Link></div>

              <div className="points"><Link to={`/`}>
              <span className=""><GiTwoCoins /></span>
              <span>orders</span>
              </Link></div>

              <div className="transaction"><Link to={`/`}>
              <span className=""><FaMoneyBill   /></span>
              <span>orders</span>
              </Link></div>

              <div className="buy-later"><Link to={`/`}>
              <span className=""><FaSave /></span>
              <span>orders</span>
              </Link></div>
              
           </div>

         </div>
     </div>
    </>
  )
}

export default UserDashboard