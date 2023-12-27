import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export function Header() {
  //Signup components

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleClose = () => {
    setIsSignupVisible(false);
  };

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Login compoenents
  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  //closes modal
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
      <nav>
        <a href="#">Home</a> | <Link to="/albums">All Albums</Link> | <Link to="/artists">All Artists</Link> |{" "}
        {localStorage.jwt === undefined ? (
          <>
            <a className="nav-link" onClick={handleSignupShow}>
              Signup
            </a>{" "}
            |{" "}
            <a className="nav-link" onClick={handleLoginShow}>
              Login
            </a>
          </>
        ) : (
          <a> Logout </a>
        )}
      </nav>
    </header>
  );
}
