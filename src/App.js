import React from "react";
import "./styles.css";
import ProfileCard from "./ProfileCard";

const profiles = [
  {
    id: 12,
    name: "Duc Sun",
    role: "ceo",
    profiles: [
      {
        id: 83,
        name: "Leo Six",
        role: "Management",
        profiles: [
          {
            id: 46,
            name: "Tab Han",
            role: "Project Manager",
            profiles: [
              {
                id: 76,
                name: "Daniel Zhou",
                role: "Team Lead",
                profiles: [
                  {
                    id: 55,
                    name: "Patrick Wang",
                    role: "Developer"
                  },
                  {
                    id: 41,
                    name: "Jonsen Li",
                    role: "Developer"
                  }
                ]
              },
              {
                id: 44,
                name: "Derek Hu",
                role: "Team Lead",
                profiles: [
                  {
                    id: 25,
                    name: "Alfie Zu",
                    role: "Developer"
                  }
                ]
              },
              {
                id: 30,
                name: "Lennis Chan",
                role: "Team Lead"
              }
            ]
          },
          {
            id: 54,
            name: "Peter Miao",
            role: "Project Manager",
            profiles: [
              {
                id: 90,
                name: "Peter Ming",
                role: "Team Lead"
              }
            ]
          }
        ]
      },
      {
        id: 43,
        name: "Shi Ten",
        role: "HR"
      },
      {
        id: 97,
        name: "Shawn Mong",
        role: "admin"
      }
    ]
  }
];

export default function App() {
  return (
    // bg-gray-400 w-full h-full absolute
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl top-0 absolute">Organisation Flow chart</h1>
      <div className="container mx-auto text-center pt-32">
        <div className="items-center justify-center flex">
          {profiles.map((profile, idX) => (
            <ProfileCard key={idX} {...profile} />
          ))}
        </div>
      </div>
      <a
        className="text-md underline text-gray-500 hover:text-gray-700 cursor-pointer bottom-0 absolute"
        href="https://codesandbox.io/s/brave-field-3e89c"
      >
        React.js version
      </a>
    </div>
  );
}
