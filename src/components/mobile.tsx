import { Link } from "react-router-dom";

export default function MobileWarning() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center backdrop space-y-4">
      <span className="inline-block p-2 rounded-md bg-white font-Inter font-semibold animate-swipeUp">
        Visit on a Desktop or Laptop.
      </span>
      <Link
        to="/"
        className="px-4 py-2 bg-[#b58825] text-white rounded-md font-Inter font-medium hover:bg-[#a1781e] transition animate-swipeUp"
      >
        Go Home
      </Link>
    </div>
  );
}
