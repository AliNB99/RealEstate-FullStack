"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-gray-500 bg-gray-100 font-semibold rounded-md p-2">
        مشکلی پیش آمده است. لطفا دقایقی بعد مجددا امتحان نمایید.
      </h2>
      <button
        className="bg-green-100 text-green-600 p-2 rounded-md font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
