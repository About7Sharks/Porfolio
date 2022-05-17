export const DivOverlay = () => {
  return (
    <div className="div2Overlay">
      <svg width="400" height="110">
        <rect
          width="300"
          height="100"
          style={{
            fill: "none",
            strokeWidth: 10,
            stroke: "#f54768",
          }}
        />
      </svg>
      <svg width="400" height="110">
        <rect
          width="300"
          height="100"
          style={{
            fill: "none",
            strokeWidth: 7,
            stroke: "#8bd76b",
          }}
        />
      </svg>
    </div>
  );
};
