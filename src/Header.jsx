import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { Modal } from "./Modal";

export function Header() {
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  //closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
      <nav>
        <a href="#">Home</a> |{" "}
        <a className="nav-link" onClick={handleSignupShow}>
          Signup
        </a>
      </nav>
    </header>
  );
}
