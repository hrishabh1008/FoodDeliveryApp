export default function Cards(props) {
  return (
    <>
      <div className="bg-blue-50 rounded-2xl size-96">
        <img
          className="rounded-3xl object-fit max-w-4/5 max-h-3/5 text-center"
          src={props.imgURL}
          alt=""
          //   height="150"
          //   width="200"
        />
        <h3>{props.name}</h3>
        <p className="font-bold">
          {props.rating}
          <span>{props.deliveryTime}</span>
        </p>
        <p className="overflow-auto">{props.description}</p>
      </div>
    </>
  );
}
