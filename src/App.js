import React from "react";
import ProfileCard from "./ProfileCard";
import profiles from "./data.json";

export default function App() {
  return (
    // bg-gray-400 w-full h-full absolute
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl top-0 absolute">Organisation Flow chart</h1>
      <div className="container mx-auto text-center pt-32">
        <div className="items-center justify-center flex">
          {profiles && profiles.map((profile, idX) => (
            <ProfileCard key={idX} {...profile} />
          ))}
        </div>
      </div>
      <a
        className="text-md underline text-gray-500 hover:text-gray-700 cursor-pointer bottom-0 absolute"
        href="https://codesandbox.io/s/github/ravisankarchinnam/tailwindcss-react-flowchart"
      >
        React.js version
      </a>
    </div>
  );
}
