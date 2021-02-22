import React from "react";

export default function StatBar({ value = 0, color, classes }) {
  const style = {
    backgroundColor: value >= 100 ? "#ff4757" : color,
    width: value >= 100 ? 100 + "%" : value + "%",
  };
  return (
    <div className={`tune__bar ${classes}`} style={style}>
      {value}
    </div>
  );
}
