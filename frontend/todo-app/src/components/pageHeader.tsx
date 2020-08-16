import React from "react";

interface PageHeaderProps {
  name: string;
  small: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  name,
  small,
  ...children
}) => {
  return (
    <header className="page-header">
      <h2>
        {name} 
        <small> {small}</small>
      </h2>
    </header>
  );
};

export default PageHeader;