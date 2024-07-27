import React from "react";

function Footer() {
  let currentDate = new Date();

  return <div className="footer">CopyrightⒸ{currentDate.getFullYear()}</div>;
}
export default Footer;
