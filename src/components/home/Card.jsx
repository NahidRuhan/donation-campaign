import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const {
    Picture,
    Title,
    Category,
    category_bg_color,
    card_bg_color,
    text_color,
    id,
  } = card;

  const navigate = useNavigate();

  return (
<div onClick={()=>navigate(`/donation/${id}`)} style={{ backgroundColor: card_bg_color }}>
  <div className="hover:cursor-pointer flex flex-col items-start">
    <img src={Picture} alt={Category} />
    <div className="space-y-3 p-3 flex-grow">
      <p
        style={{ color: text_color, backgroundColor: category_bg_color }}
        className="py-1 px-2 max-w-min rounded"
      >
        {Category}
      </p>
      <p style={{ color: text_color }} className="">
        {Title}
      </p>
    </div>
  </div>
</div>
  );
};

export default Card;
