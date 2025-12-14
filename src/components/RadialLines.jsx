
const RadialLines = ({
  lineCount = 70,
  radius = 250,
  centerGap = 60,     // space from center
  stroke = "#9aabffaf",
  strokeWidth = 2,
  size = 500,
}) => {
  const center = size / 2;

  const lines = [];
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * 2 * Math.PI;

    const x1 = center + centerGap * Math.cos(angle);
    const y1 = center + centerGap * Math.sin(angle);

    const x2 = center + radius * Math.cos(angle);
    const y2 = center + radius * Math.sin(angle);

    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    );
  }

  return (
    <svg width={size}  height={size} style={{ display: "block" }}>
      {lines}
    </svg>
  );
};

export default RadialLines;
