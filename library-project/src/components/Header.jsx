import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";

const Heading = () => <h1>Nile 서점</h1>;

const Header = (props) => {
  const location = useLocation();
  const [isModal, setIsModal] = useState(false);
  const [prevChildren, setPrevChildren] = useState("");

  useEffect(() => {
    const modal = location.state?.modal;
    setIsModal(modal);

    if (isModal) {
      setPrevChildren(props.children);
    }
  }, [location]);

  return (
    <div className="well">
      <Heading />
      <div>
        {isModal ? prevChildren : props.children}

        {isModal ? (
          <Modal isOpen={!!isModal} returnTo={location.state.returnTo}>
            {props.children}
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
