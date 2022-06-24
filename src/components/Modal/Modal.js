import "./Modal.css";

import { useRef, useState } from "react";

export const Modal = (props) => {
  const { modalUserPhoto } = props;
  const imgElement = useRef(null);
  const [isViewTypeLandscape, setIsViewTypeLandscape] = useState(false);

  const setViewType = () => {
    if (imgElement.current.naturalHeight > imgElement.current.naturalWidth) {
      setIsViewTypeLandscape(false);
    } else {
      setIsViewTypeLandscape(true);
    }
  };

  return (
    <div
      className={isViewTypeLandscape ? "modal-landscape" : "modal-portrait"}
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        display: props.show ? "" : "none",
        opacity: props.show ? 1 : 0,
      }}
    >
      <img
        className="modal-full-image"
        src={modalUserPhoto?.imageURL}
        alt="preview"
        ref={imgElement}
        onLoad={setViewType}
      />
    </div>
  );
};
