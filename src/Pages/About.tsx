import React from "react";

function About() {
  return (
    <div className="flex p-12 justify-between">
      <div>

        <h1 className="text-[#16a34a] text-[2.5rem]">About Us</h1>
        <p className="text-[1.3rem] text-[#6b7280] w-[350px]">
          H&M Group is a family of brands and businesses, making it possible for
          customers around the world to express themselves through fashion and
          design, and to choose a more sustainable lifestyle. We create value
          for people and society in general by delivering our customer offering
          and by developing with a focus on sustainable and profitable growth.
        </p>
      </div>

      <div>
        <img className="w-180" src="./about_img.jpg" alt="About Us" />
      </div>
    </div>
  );
}

export default About;
