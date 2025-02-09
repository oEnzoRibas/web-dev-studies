import { useCallback } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "dark" | "info" | "warning";
  onClickedItem: (item: string) => void;
}

const Button = ({ children, onClickedItem, color = "primary" }: Props) => {
  const handleClick = useCallback(() => {
    onClickedItem(children);
  }, [onClickedItem, children]);

  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
