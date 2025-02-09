import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;

  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {heading}
      {items.length === 0 && <p>No Items Found</p>}
      <div className="list-group">
        {items.map((item, index) => (
          <button
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            type="button"
            className={
              selectedIndex === index
                ? "list-group-item list-group-item active"
                : "list-group-item"
            }
            aria-current="true"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ListGroup;
