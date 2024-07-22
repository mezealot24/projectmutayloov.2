import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";

export const Detail = () => {
  return (
    <div className="container lg:p-4">
      <div className="flex flex-col self-stretch pt-4 pb-16 mx-auto w-full lg:py-12 ">
        <div className="flex gap-0 px-5 lg:px-1 whitespace-nowrap">
          <div className="flex-1 my-auto text-4xl font-semibold leading-6 text-black lg:justify-start">
            Title
          </div>
          <div className="flex flex-1 gap-2 py-8 pl-2 text-base text-neutral-900 justify-end">
            <div className="my-auto">Share</div>
            <IoArrowRedoOutline className="w-4 h-4" />
            <a href="https://www.facebook.com/login/">
              <CiFacebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/i/flow/login">
              <FaSquareXTwitter className="w-4 h-4" />
            </a>
            <a href="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Fwidget%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Fwidget%25252Fclose%26state%3D9fec98665820574ebc349f47d089a6%26client_id%3D1446101138&loginChannelId=1446101138#/">
              <FaLine className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-4 w-full text-base leading-6 text-neutral-700 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="justify-center items-center px-4 mt-4 lg:mt-8 w-full lg:h-2/5 text-base font-medium leading-6 bg-gray-100 border-l-2 border-black border-solid aspect-auto text-zinc-500 text-justify">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi
          etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere
          malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit
          morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
          posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Velit dapibus est, nunc, “
        </div>
      </div>
    </div>
  );
};
