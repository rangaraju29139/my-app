import React from "react";
import image from "../assets/images/description-banner.png";

import { Image } from "react-bootstrap";
function Description() {
  return (
    <>
      <Image src={image} className="img-fluid banner p-0" alt="..." />
    </>
  );
}
export default Description;
