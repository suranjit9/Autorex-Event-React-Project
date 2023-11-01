

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  

  return (
    <div className="text-center mt-[20%]">
      <h1 className="text-2xl font-extrabold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}