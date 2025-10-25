import React from "react";
import profile from "../assets/profile.jpeg";

function ProfileImage() {
    return (
        <div className="flex justify-center md:justify-end mb-8">
            <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-md object-cover border-4 border-gray-700 shadow-lg"
            />
        </div>
    );
}

export default ProfileImage;
