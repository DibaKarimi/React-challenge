import React from "react";
export const Subheading = (props) => {
  const { home_port, roles } = props;
  return (
    <>
      <h2>{home_port}</h2>
      <ul>
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </>
  );
};

export default Subheading;
