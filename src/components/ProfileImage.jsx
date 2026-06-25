import React from "react";
import profile from "../assets/profile-centered.jpeg";

function ProfileImage() {
    return (
        <div className="flex justify-center mb-8">
            <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-800 shadow-xl"
            />
        </div>
    );
}

export default ProfileImage;
