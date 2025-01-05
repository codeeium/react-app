import React from "react";
import "./App.css";
import birthdayImage from "./birthday-image.jpeg"; // Make sure to import the image

const BirthdayWish = () => {
    return (
        <div className="birthday-container">
            <img
                src={birthdayImage}
                alt="Happy Birthday"
                className="birthday-image"
            />
            <h1>🎉 Happy Birthday! 🎂</h1>
            <p>
                Wishing you a day filled with love, laughter, and endless joy! May this
                year bring you exciting new opportunities, incredible growth, and all the
                happiness your heart can hold. Remember, the world is full of endless
                possibilities, and you have everything within you to make your dreams come
                true. Cheers to another wonderful year ahead—may it be your best one yet!
            </p>
        </div>
    );
};

export default BirthdayWish;
