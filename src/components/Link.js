import React from "react";

export const Link = ({ source, title, newTab }) => (
  <a href={source} target={newTab ? "_blank" : undefined} rel="noreferrer">
    {title}
  </a>
);
