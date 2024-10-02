import "./index.css";

let Starrationg = () => {
  let product = {
    rating: 4.5,
  };
  return (
    <div class="stars">
      <div class="empty-stars">&#9734;&#9734;&#9734;&#9734;&#9734;</div>

      <div
        class="filled-stars"
        style={{ width: `${(product.rating / 5) * 100}%` }}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div>
    </div>
  );
};
export default Starrationg;
