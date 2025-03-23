import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();

  return (
    <>
      <h1>{`${err.status}: ${err.statusText}`}</h1>
      <h1>{err.error.message}</h1>
      <h1>{err.error.stack}</h1>
    </>
  );
}
