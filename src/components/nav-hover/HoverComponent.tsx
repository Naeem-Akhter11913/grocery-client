import React, { Dispatch, FC, SetStateAction } from 'react';
import './style.css';
import { naveType } from '@/utils/types';
import { ArrowDown, ArrowUp } from '@/utils/Arrows';

type Props = {
  item: naveType;
  index: number;
  setHoverIndex: Dispatch<SetStateAction<number | null>>;
  hoverIndex: number | null;
};

const HoverComponent: FC<Props> = ({ item, index, setHoverIndex, hoverIndex }) => {
  const isHovered = hoverIndex === index;

  return (
    <div
      className="hover-container position-relative d-inline-block"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <div className="d-flex align-items-center gap-1">
        {item.icon && item.icon}
        <span className="middle-font-size">{item.label}</span>
        {item.dropdown && (isHovered ? <ArrowUp /> : <ArrowDown />)}
      </div>

      {item.dropdown && isHovered && item.content && (
        <div className="hover-list position-absolute bg-white shadow-sm p-2 rounded">
          <ul className="list-unstyled m-0">
            {item.content.map((contentItem, idx) => (
              <li key={idx}>{contentItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HoverComponent;
