import React from "react";

export default function Link({ href = "#", text }) {
  return (
    <li>
      <a className="nav-link" href={href}>
        {text}
      </a>
    </li>
  );
}
