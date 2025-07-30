import React, { useEffect } from "react";

export default function GalleryLightbox({ images, currentIndex, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (currentIndex === null) return null;

  return (
    <div className="gallery-lightbox-overlay" onClick={onClose}>
      <div className="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt="Gallery preview"
          className="gallery-lightbox-img"
        />
        <button className="gallery-lightbox-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}
