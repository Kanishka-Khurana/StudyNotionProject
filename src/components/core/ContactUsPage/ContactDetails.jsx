import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "harshsindhupvt@gmail.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at my LinkedIn.",
    details: "Harsh Sindhu",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+999999999",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}

      {/* Add a link to download the resume */}
      <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <div className="flex flex-row items-center gap-3">
          <Icon1.BiDownload size={25} />
          <h1 className="text-lg font-semibold text-richblack-5">
            <a
              className="font-medium text-yellow-100"
              href="https://drive.google.com/file/d/1lf09Hmro15Vsq6wa-ddgbPwKWsBBZIsG/view"
              download="https://drive.google.com/file/d/1lf09Hmro15Vsq6wa-ddgbPwKWsBBZIsG/view"
            >
              Download My Resume
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
