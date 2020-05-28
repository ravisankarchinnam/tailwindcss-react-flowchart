import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileListItem = props => {
  return (
    <li className="relative p-6">
      <div className="absolute w-full h-8 -mt-8 border-t border-gray-500 transform first:translate-x-1/2 first:left-0 last:-translate-x-1/2 last:right-0" />
      <div className="relative flex justify-center">
        <div className="absolute w-1 h-8 -mt-8 border-l border-gray-500" />
        <ProfileCard {...props} />
      </div>
    </li>
  );
};

export default ProfileListItem;
