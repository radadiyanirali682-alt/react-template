import React from "react";
import {
  FaArrowRight,
  FaSearch,
  FaPlay,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

export default function Icon({ name, className }) {
  const icons = {
    arrow: FaArrowRight,
    search: FaSearch,
    play: FaPlay,
    facebook: FaFacebookF,
    instagram: FaInstagram,
    twitter: FaTwitter
  };

  const SelectedIcon = icons[name];

  return <SelectedIcon className={className} />;
}
