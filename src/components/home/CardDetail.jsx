import { useParams, useLoaderData } from "react-router-dom";
import { getDonation, setDonation } from "../../utils/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetail = () => {
  const data = useLoaderData();
  const idString = useParams();
  const idInt = JSON.parse(idString.id);

  const donation = data.find((data) => data.id === idInt);
  const { Picture, Title, description, price, text_color, id } = donation;

  const handleDonate = () => {

    const check = getDonation();
    if (check.includes(id)) {
        toast.error('You have already donated to this campaign');
    }
    else toast.success('Thanks for your donation');

    setDonation(id);

  }

  return (
    <div className="space-y-10 pb-10">
      <div className="relative">
        <img className="w-full" src={Picture} alt={Title} />
        <div
          className="absolute bottom-0 pl-10 w-full py-5"
          style={{ backgroundColor: "rgba(11, 11, 11, 0.5)" }}
        >
          <button onClick={handleDonate}
            className="btn btn-primary text-white"
            style={{ backgroundColor: text_color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>{" "}
      <h1 className="font-bold text-4xl">{Title}</h1>
      <p>{description}</p>
      <ToastContainer />
    </div>
  );
};

export default CardDetail;
