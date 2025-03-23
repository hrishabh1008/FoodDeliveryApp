import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addItem } from "../redux/cartSlice";
export default function Cards(props) {
  //   const dispatch = useDispatch();
  //   console.log(useDispatch);
  //   function handleAddItem(item) {
  //     dispatch(addItem(item));
  //   }

  return (
    <>
      <div className=" rounded-2xl p-2 w-70 h-70   overflow-hidden hover:scale-105 hover:shadow-lg">
        <img
          className=" w-full h-40 object-cover rounded-2xl  border-1 "
          src={props.imgURL}
          alt="Item Image"
        />
        <p className="font-bold text-center">
          {props.rating} [<span>{props.deliveryTime}</span>]
        </p>
        <h3 className="font-bold font-serif">{props.name}</h3>

        <p className="overflow-hidden ">{props.description}</p>
        {/* <button className="font-bold bg-green-300" onClick={handleAddItem}>
          {props.button}
        </button> */}
      </div>
    </>
  );
}
