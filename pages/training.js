import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";

import {
  FaCheckCircle,
  FaPlayCircle,
  FaRegFileAlt,
  FaComments,
} from "react-icons/fa";

const courseItems = [
  {
    type: "Video",
    title: "Welcome to the Google UX Design Certificate",
    time: "5 min",
  },
  {
    type: "Reading",
    title: "Begin the Google UX Design Certificate",
    time: "10 min",
  },
  {
    type: "Video",
    title: "Introduction to Course 1: Foundations of UX Design",
    time: "2 min",
  },
  { type: "Reading", title: "Welcome to Course 1", time: "10 min" },
  { type: "Reading", title: "Program surveys", time: "10 min" },
  { type: "Survey", title: "Participant entry survey", time: "10 min" },
  { type: "Discussion Prompt", title: "Introduce yourself", time: "10 min" },
  { type: "Commit", title: "Commit to completing the program", time: "5min" },
  { type: "Reading", title: "Welcome to Course 1", time: "10 min" },
  { type: "Reading", title: "Program surveys", time: "10 min" },
];

const getIcon = (type) => {
  switch (type) {
    case "Video":
      return <FaPlayCircle className="text-blue-500" />;

    case "Reading":
      return <FaRegFileAlt className="text-green-500" />;

    case "Discussion Prompt":
      return <FaComments className="text-purple-500" />;

    case "Survey":
      return <FaRegFileAlt className="text-yellow-500" />;

    case "Commit":
      return <FaCheckCircle className="text-teal-500" />;

    default:
      return <FaRegFileAlt />;
  }
};

export default function Leads() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*
    <Header toggleDark={toggleDark} /> */}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-3 banner-pattern">
        <div className="flex  justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Training
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Great leaders never stop learning. You're almost there.
            </p>
          </div>
          <div className="">
            {/* <a
                    className=" px-4 py-2 border border-accent text-accent bg-accent rounded-md hover:bg-accent hover:text-white transition-colors text-sm font-semibold"
                    href="/leads">+ Agent</a> */}
            {/* <button
                    className=" px-4 py-2 border-red-theme text-white bg-red-theme  dark:text-white rounded-md transition-colors text-sm font-semibold"
                    href="/leads">+ Notes</button> */}
            <button
              onClick={() => setIsOpen(true)}
              className=" relative overflow-hidden px-4 py-2 text-sm rounded-md
                    text-red-600 border border-red-600 group transition-colors duration-200 md:mt-0 mt-2"
            >
              <span class="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span class="relative z-10 group-hover:text-white flex items-center">
                {" "}
                <i className="fas fa-tasks"></i>
                <span className="text-sm ml-2 hidden md:block">Notes</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* LEFT SECTION */}
        <div className="md:col-span-8 bg-white dark:bg-darkcard dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-1">
          <div className="p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-6">
              This Week's Highlight: Advanced Sales Techniques
            </h2>
            <div className="relative pb-[68.25%] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                alt="Featured Video Thumbnail"
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="md:col-span-4 bg-white dark:bg-gray-800  rounded-xl p-4 overflow-y-auto h-full">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Start the program
          </h3>
          <ul className="py-3">
            {courseItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-start gap-3 text-sm dark:text-gray-200 border-b dark:border-gray-600 border-bg-gray-600 pb-3 px-3 pt-3 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <div>
                  <div className="mt-1 flex gap-2 items-center">
                    {getIcon(item.type)}
                    <p className="font-medium">
                      {item.type}:{" "}
                      <span className="font-normal">{item.title}</span>
                    </p>
                  </div>
                  {item.time && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                      {item.time}
                    </span>
                  )}
                </div>
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    class="h-4 w-4 accent-red-500 bg-gray-300 dark:bg-gray-700 rounded border-gray-300 dark:border-gray-600 cursor-pointer"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-8 bg-white dark:bg-darkcard dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-3">
          <div className="p-4 md:p-6">
            {/* <div className="bg-white dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden mb-6">
                    <div className="p-4 md:p-6"> */}
            <h2 className="text-lg font-semibold mb-4">
              Your Certification Progress
            </h2>

            {/*
                        <!-- Desktop Progress Bar --> */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Life Insurance Certification
                </span>
                <span className="text-sm font-medium text-accent">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                You're 60% toward your certification
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Resume from where you left off
              </p>

              {/* <div class="relative inline-flex size-3">
                                <span
                                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-white dark:bg-darkcard dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-3">
          <div className="p-4 md:p-6 relative">
            {/* <div className="bg-white dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden mb-6">
                            <div className="p-4 md:p-6"> */}
            <h2 className="text-lg font-semibold mb-4">
              For Badge Requirement
            </h2>
            {/*
                                <!--  badge box --> */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Upcoming Batch</span>
                <span className="text-sm font-medium text-accent absolute top-[50px] right-[20px]">
                  <i class="fas fa-trophy text-yellow-500 text-7xl"></i>
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                complete this training and get the gold trophy
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                few more steps to go
              </p>

              {/* <div class="relative inline-flex size-3">
                                        <span
                                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                        <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                    </div> */}
            </div>
          </div>
        </div>
        {/* DRAWER */}
        <div
          className={`fixed top-42 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform
                            bg-white w-[70%] md:w-[30%] dark:bg-gray-800 ${
                              isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
        >
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <i className="fas fa-pencil pr-3"></i>
            Notes
          </h5>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                                text-sm w-8 h-8
                                absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600
                                dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {/* Content */}
          <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="max-w-xl mx-auto p-4 border border-gray-300  rounded-lg bg-white shadow-sm transition-all focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500 dark:bg-gray-800 dark:border-gray-600">
              <textarea
                rows="3"
                className="w-full resize-none border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 dark:bg-gray-800 dark:text-white "
                placeholder="Add your comment..."
              ></textarea>

              <div className="flex items-center justify-end mt-2">
                {/* <div className="flex items-center space-x-4 text-gray-400">
                                            <button type="button">
                                                <i className="fas fa-paperclip"></i>
                                            </button>
                                            <button type="button">
                                                <i className="fas fa-smile"></i>
                                            </button>
                                        </div> */}
                <button
                  className=" relative overflow-hidden px-4 py-2 text-sm rounded-md
                                         text-red-600 border border-red-600 group transition-colors duration-200"
                >
                  <span class="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-white">Post</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
