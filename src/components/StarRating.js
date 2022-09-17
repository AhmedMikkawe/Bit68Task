import starFill from "../assets/star-fill.png";
import star from "../assets/star.png";
function StarRating({ numberOfStars }) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numberOfStars) {
      stars.push(<img src={starFill} />);
    } else {
      stars.push(<img src={star} />);
    }
  }
  return stars.map((s) => {
    return s;
  });
}
export default StarRating;
