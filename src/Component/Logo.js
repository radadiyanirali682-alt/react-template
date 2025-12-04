
import React from "react";

export default function Logo({ src = "logo.jpg", alt = "Logo", className }) {
  return <img src={src} alt={alt} className={className} />;
}
