import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const StarRating = ({ rate }) => {
  /*
let rate=5;

console.log([...Array(rate)]);
console.log([...Array(5-rate)]);
console.log("rate:");
[...Array(rate)].map((item,index)=>console.log(item,index));
console.log("No Rate:");
[...Array(5-rate)].map((item,index)=>console.log(item,index));
*/
  return (
    <div>
    <span>
      {[...Array(rate)].map((item, index) => (
        <FontAwesomeIcon className="rate" key={index} icon={faStar} />
      ))}
    </span>
    <span>
    {[...Array(5-rate)].map((item, index) => (
      <FontAwesomeIcon key={index} icon={faStar} />
    ))}
  </span>
  </div>
  );
};

export default StarRating;
