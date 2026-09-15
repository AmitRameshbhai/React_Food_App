const RestroCard = (props) => {
  const { resData } = props;
  const info = resData?.info;

  if (!info) return null; // safety net, shouldn't trigger now that Body filters bad items

  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + info.cloudinaryImageId}
        alt={info.name}
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.avgRating} ⭐</h4>
      <h4>{info.sla?.slaString}</h4>
      <h4>{info.costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
