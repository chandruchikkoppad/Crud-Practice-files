import React,{useContext,Fragment} from "react";
import Styles from "./-Navbar.module.css";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../apis/ContextApi";

// const Menu = () => {
//     // let { authUser, isLoading, Logout } = useContext(AuthContext)
  
   
//   return (
//     <div className={Styles.AuthBlock}>
//       <Link to="/register">
//         <button>Register</button>
//       </Link>
//       &nbsp;
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//     </div>
//   );
// };

// export default Menu;


const Menu = () => {
  let { authUser, isLoading, Logout } = useContext(AuthContext);
  console.log(authUser);
  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/profile" className={Styles.avatarURL}>
            <img src={authUser.photoURL} alt={authUser.username} />
          </NavLink>
        </li>
        <li>
          <button onClick={() => Logout()}>Logout</button>
        </li>
      </Fragment>
    );
  };
  let AnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </Fragment>
    );
  };
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {isLoading === true ? (
          "loading...."
        ) : authUser === null ? (
          <AnonymousUser />
        ) : (
          <AuthenticatedUser />
        )}
      </ul>
    </div>
  );
};

export default Menu;
