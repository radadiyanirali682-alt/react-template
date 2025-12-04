import React from "react";

export default function Image({ src, alt }) {
  return (
    <div className="gallery-item">
      <img src={src} alt={alt} />
    </div>
  );
}
