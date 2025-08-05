import React, {useState} from 'react';
import Modal from "react-modal"

Modal.setAppElement('#page_root')

const VideoPopup = ({videoUrl, title}) => {
	const [isOpen, setIsOpen] = useState(false)
	
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	return (
		<>
			
			<a tabIndex="-1" className="vs-room--play popup-video" onClick={openModal}>
				<i className="fa-solid fa-play"/>
			</a>
			
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				contentLabel="Video Popup"
				className="popup-content"
				overlayClassName="popup-overlay"
			>
				<button className="close-button" onClick={closeModal} tabIndex="-1">x</button>
				<div className="video-container">
					<iframe
						src={videoUrl}
						title={title}
						frameBorder="0"
						allow="autoplay"
						allowFullScreen
						width="100%"
						height="100%"
					/>
				</div>
			</Modal>
			
		</>
	);
};

export default VideoPopup;
