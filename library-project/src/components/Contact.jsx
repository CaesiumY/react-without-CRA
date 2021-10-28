import React, { useEffect } from "react";

const Contact = (...props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return <div>contact</div>;
};

export default Contact;
