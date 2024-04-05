import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getDonation } from "../../utils/localStorage";

const Donation = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [donation, setDonation] = useState([]);
  const [all,setAll] = useState(false);

  useEffect(() => {
    const donationId = getDonation();
    const donation = data.filter((data) => donationId.includes(data.id));
    setDonation(donation);
  }, [data]);

  return (
    <div>
        <div className="grid grid-cols-2 gap-5 py-10">
        {donation.length ? (
  all ? (
    donation.map((donation) => (
      <div
        key={donation.id}
        style={{ backgroundColor: donation.card_bg_color }}
      >
        <div className="flex items-start">
          <div className="basis-2/5">
            <img
              className="w-full"
              src={donation.Picture}
              alt={donation.Category}
            />
          </div>
          <div className="space-y-1 p-3 flex-grow basis-3/5">
            <p
              style={{
                color: donation.text_color,
                backgroundColor: donation.category_bg_color,
              }}
              className="py-1 px-2 max-w-min rounded"
            >
              {donation.Category}
            </p>
            <p style={{ color: "black" }} className="font-bold text-xl">
              {donation.Title}
            </p>
            <p className="font-bold" style={{ color: donation.text_color }}>
              $ {donation.price}
            </p>
            <div>
              <button
                onClick={() => navigate(`/donation/${donation.id}`)}
                style={{ backgroundColor: donation.text_color }}
                className="hover:cursor-pointer border py-1 px-2 rounded text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    donation.slice(0, 4).map((donation) => (
      <div
        key={donation.id}
        style={{ backgroundColor: donation.card_bg_color }}
      >
        <div className="flex items-start">
          <div className="basis-2/5">
            <img
              className="w-full"
              src={donation.Picture}
              alt={donation.Category}
            />
          </div>
          <div className="space-y-1 p-3 flex-grow basis-3/5">
            <p
              style={{
                color: donation.text_color,
                backgroundColor: donation.category_bg_color,
              }}
              className="py-1 px-2 max-w-min rounded"
            >
              {donation.Category}
            </p>
            <p style={{ color: "black" }} className="font-bold text-xl">
              {donation.Title}
            </p>
            <p className="font-bold" style={{ color: donation.text_color }}>
              $ {donation.price}
            </p>
            <div>
              <button
                onClick={() => navigate(`/donation/${donation.id}`)}
                style={{ backgroundColor: donation.text_color }}
                className="hover:cursor-pointer border py-1 px-2 rounded text-white"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  )
) : (
  <p className="font-bold text-xl text-center col-span-2">No Donation Made Yet</p>
)}
    </div>
    <div className="flex justify-center">
        {donation.length>4 && all===false ? (<button onClick={()=>{setAll(!all)}
    
    } className="btn btn-primary">See All</button>):<></>}
    </div>
    </div>
    
  );
};

export default Donation;
