import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          perspiciatis molestias, blanditiis consequatur accusamus quis
          repellendus et eos praesentium sed accusantium excepturi nisi
          architecto dignissimos, repellat quibusdam. Velit, iusto esse modi
          laboriosam voluptatem voluptas dolore perferendis rerum vitae corporis
          ut maxime delectus sed magni iure eius molestias eaque sequi
          assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          soluta aspernatur quae, quas nobis autem maxime eligendi optio
          provident eaque dolorem sit sapiente debitis nihil, a rerum tempore
          rem vero!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
