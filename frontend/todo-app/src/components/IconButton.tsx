import React from "react";

interface IconButtonProps {
  hide?: boolean;
  estilo?: string;
  onClick(): void;
  icon: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  hide,
  estilo,
  icon,
  onClick
}) => {
  return (
    <>
      {!hide && (
        <button className={`btn btn-${estilo || "primary"}`} onClick={onClick}>
          <i className={`fa fa-${icon}`}></i>
        </button>
      )}
    </>
  );
};

export default IconButton;
