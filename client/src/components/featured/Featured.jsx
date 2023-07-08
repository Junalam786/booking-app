import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=hydrabad,madrid,kolkata"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/charminar-hyderabad-featured-image%20(1).jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hydyabar</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipOYOC3Fr9wGiwXRaXib1ZOWm5Mbr0Y8NrVWa9Dx=w548-h318-n-k-no"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>kolkata</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
