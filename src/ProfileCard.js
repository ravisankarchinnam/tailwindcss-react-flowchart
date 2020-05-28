import React from "react";
import ProfileList from "./ProfileList";

const ProfileCard = ({ id, name, role, profiles = [] }) => {
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-16">
          <img
            className="block rounded-full m-auto shadow-md"
            alt={name}
            src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
          />
        </div>
        <div className="text-gray-600">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
      {profiles.length > 0 && <ProfileList profiles={profiles} />}
    </div>

    // <div className="text-center">
    //   <div className="flex justify-center items-center">
    //     <div className="bg-gray-100 shadow-md py-4 px-2 md:p-0 rounded-lg md:rounded-full text-center grid grid-flow-col items-center">
    //       <div className="md:mr-4 w-16 md:w-20">
    //         <img
    //           className="block shadow-md rounded-full"
    //           src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
    //           alt=""
    //         />
    //       </div>
    //       <div className="md:text-left text-center">
    //         <h2 className="text-md font-semibold w-32">{name}</h2>
    //         <p className="text-gray-700 text-sm uppercase">{role}</p>
    //       </div>
    //     </div>
    //   </div>
    //   {profiles.length > 0 && <ProfileList profiles={profiles} />}
    // </div>
  );
};

export default ProfileCard;
