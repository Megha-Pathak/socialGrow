import "./ImageCard.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const ImageCard = (props) => {
  const { particularUserPosts } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUserPhoto, setModalUserPhoto] = useState(particularUserPosts[0]);

  const closeModal = () => {
    setIsModalOpen(false);
    document.removeEventListener("click", closeModal);
  };
  const openModal = (user) => {
    setIsModalOpen(false);
    setIsModalOpen(true);
    document.addEventListener("click", closeModal);
    setModalUserPhoto(user);
  };
  return (
    <div className="image-card">
      <Modal
        modalUserPhoto={modalUserPhoto}
        show={isModalOpen}
        close={closeModal}
      />
      {particularUserPosts?.map((user) => (
        <div
          className="image-photo-div"
          onClick={(e) => {
            e.stopPropagation();
            openModal(user);
          }}
        >
          <img
            className="image-photo"
            src={user?.imageURL}
            alt={user?.imageURL}
          />
        </div>
      ))}
    </div>
  );
};
