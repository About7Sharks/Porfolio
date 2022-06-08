type Props = {
  symbol: string;
  label?: string;
};

export const Emoji = (props: Props) => {
  const { label, symbol } = props;
  return (
    <span
      style={{ marginLeft: "5px" }}
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};
