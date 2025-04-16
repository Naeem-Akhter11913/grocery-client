import { CategoryItem } from "@/utils/types";
import './style.css';


type Props = {
  items: CategoryItem[];
};

const bgColors = [
  "#fff8e1", "#fff3f0", "#e8f8ec", "#f6fdea", "#fff9e6",
  "#eafff2", "#fff6f5", "#f9f6ff", "#f1fff5", "#fff0f6"
];

const FeaturedCategories: React.FC<Props> = ({ items }) => {
  return (
    <div className="featured-categories mx-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="category-item"
          style={{ backgroundColor: bgColors[index % bgColors.length] }}
        >
          <img src={item.image} alt={item.title} />
          <h3><a href="#">{item.title}</a></h3>
          <p>{item.items} items</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCategories;
