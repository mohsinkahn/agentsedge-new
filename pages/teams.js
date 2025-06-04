import React, { act, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nodata from '../img/no-data.png';




const clientData = [
    {

        name: "XYZ Team",
        email: "xyz_team@gmail.com",
        activePolicies: 10,
        totalLeads: 100,
        managedBy: "Jhon woo",
        agents: 50,
    },
        {

            name: "XYZ Team2",
            email: "xyz_team2@gmail.com",
            activePolicies: 20,
            totalLeads: 50,
            managedBy: "Ken willis",
            agents: 10,
        },
        {

        name: "XYZ Team3",
        email: "xyz_team3@gmail.com",
        activePolicies: 30,
        totalLeads: 150,
        managedBy: "Kai Louis",
        agents: 20,
    },
    {

        name: "XYZ Team4",
        email: "xyz_team4@gmail.com",
        activePolicies: 40,
        totalLeads: 200,
        managedBy: "Kai Louis",
        agents: 30,
    },
    {

        name: "XYZ Team5",
        email: "xyz_team5@gmail.com",
        activePolicies: 50,
        totalLeads: 250,
        managedBy: "Jhon woo",
        agents: 40,
    },
    {

        name: "XYZ Team6",
        email: "xyz_team6@gmail.com",
        activePolicies: 60,
        totalLeads: 300,
        managedBy: "Ken willis",
        agents: 50,
    },
    {

        name: "XYZ Team7",
        email: "xyz_team7@gmail.com",
        activePolicies: 70,
        totalLeads: 350,
        managedBy: "Kai Louis",
        agents: 60,
    },
    {

        name: "XYZ Team8",
        email: "xyz_team8@gmail.com",
        activePolicies: 80,
        totalLeads: 400,
        managedBy: "Jhon woo",
        agents:70,   
    },
    
];
export default function Teams() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter teams based on search query
    const filteredTeams = clientData.filter(team =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-3 banner-pattern">
                <div className="flex  justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-2xl font-bold text-black dark:text-white">Teams</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Your all generated teams and under teams's agents here</p>

                    </div>
                    <div className='flex gap-2'>
                        <button href=""
                            className=" px-4 py-2 border-red-theme text-white bg-red-theme  md:mt-0 mt-2 flex items-center dark:text-white rounded-md transition-colors text-sm font-semibold">
                           <i className="fa-solid fa-plus"></i> 
                           <span className="text-sm ml-2 hidden md:block">Add Team</span>
                        </button>
                    </div>
                </div>
            </div>


            {/*
        <!-- Client Table --> */}
            <div className="   shadow-sm overflow-hidden">
          {/* <!-- card view--> */}
                <div>
                    {/*
            <!-- Filter Panel --> */}
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 sticky top-0 z-10">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                                        placeholder="Search by team name..."
                                    />
                                </div>
                            </div>
                            <div class="flex flex-row md:flex-row gap-3">
                                <div className="relative w-full">
                                    <select
                                        className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                                        <option>Managed by</option>
                                        <option>Jhon woo</option>
                                        <option>Ken willis</option>
                                        <option>Kai Louis</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="w-4 h-4 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    {filteredTeams.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 overflow-x-auto'>
                            {filteredTeams.map((client, index) => (
                                <div key={index} className="bg-white rounded-2xl dark:rounded-2xl divide-y divide-gray-200 dark:bg-gray-800 mb-3">
                                    <div className="p-6 client-card">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">


                                                <div>
                                                    <div className="font-medium">{client.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{client.email}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">

                                                <div>
                                                    <button className="px-3 py-1 text-gray-500  rounded-lg  dark:text-gray-300">
                                                        <i className="fas fa-pencil"></i>
                                                    </button>

                                                </div>
                                                <div>
                                                    <button class="px-3 py-1 text-gray-500  rounded-lg  dark:text-gray-300">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                            <div className='w-full dark:bg-gray-700 rounded-lg p-2 bg-gray-100'>
                                                <div className="text-gray-500 dark:text-gray-400">Total Leads</div>
                                                <div>{client.totalLeads}</div>
                                            </div>
                                            <div className='w-full dark:bg-gray-700 rounded-lg p-2 bg-gray-100'>
                                                <div className="text-gray-500 dark:text-gray-400">Active Policies</div>
                                                <div>{client.activePolicies}</div>
                                            </div>
                                            <div className='w-full dark:bg-gray-700 rounded-lg p-2 bg-gray-100'>
                                                <div className="text-gray-500 dark:text-gray-400">Managed by</div>
                                                <div>{client.managedBy}</div>
                                            </div>

                                        </div>

                                        <div className="mt-7 flex justify-between items-center space-x-2">
                                        <div className="text-gray-500 dark:text-gray-400">Agents</div>
                                            <div className="flex -space-x-2 overflow-hidden ">
                                                {[1, 2, 3, 4, 5].map((_, index) => (
                                                    <img
                                                        key={index}
                                                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                                                        src={`https://ui-avatars.com/api/?name=User${index}&background=random`}
                                                        alt={`Team member ${index + 1}`}
                                                    />
                                                ))}
                                                {client.agents > 5 && (
                                                    <span className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-gray-200 dark:bg-gray-700 text-xs font-medium">
                                                        +{client.agents - 5}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-800 rounded-xl">
                            <Image 
                                src={Nodata} 
                                alt="No Data Found" 
                                width={300}
                                height={300}
                                priority
                                className="mb-4"
                            />
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No records found</p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-4 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>




        </>

    )
}