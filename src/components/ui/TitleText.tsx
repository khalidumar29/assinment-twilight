import React from "react";

interface TitleTextProps {
  title: string;
}

const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  return <h3 className="text-xl font-semibold text-black">{title}</h3>;
};

export default TitleText;
