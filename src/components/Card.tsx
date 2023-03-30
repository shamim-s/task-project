import React from "react";

const Card = ({user}) => {
  return (
    <div className="w-full h-14 bg-white text-[#181818] rounded-lg flex justify-between items-center p-4">
      <div>
        <h1 className="text-lg font-semibold">{user?.name?.title + user?.name?.first + user?.name?.last}</h1>
      </div>
      <img src={user.picture.medium} className="rounded-full w-10" alt=""/>
    </div>
  );
};

export default Card;
