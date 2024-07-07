import React from "react";
import SignUpForm from "./SignUpForm";
import LoginPrompt from "./LoginPrompt";
import "./BeanQuest.css";


function BeanQuest() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="w-full bg-neutral-800 max-md:max-w-full max-sm:hidden">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dab75df110a7565f62f442e3368def9857b6ea43ef89c861f3bb96e4a59c035?apiKey=8e4e6299ad324b319eddb1cf70c73764&"
              alt=""
              className="grow mt-6 w-full aspect-[0.78] max-md:mt-10 max-md:max-w-full max-sm:hidden"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-32 text-white max-md:mt-10 max-md:max-w-full">
              <header className="flex z-10 flex-col ml-10 max-w-full w-[671px] max-sm:hidden">
                <h1 className="self-end text-8xl max-md:max-w-full max-md:text-4xl">
                  Bean Quest
                </h1>
                <h2 className="mt-10 mr-8 text-5xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                  Join us today and start <br /> exploring!
                </h2>
              </header>
              <SignUpForm />
              <LoginPrompt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeanQuest;