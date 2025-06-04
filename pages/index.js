import Head from 'next/head'
import { useEffect, useState } from 'react';
import useDarkMode from '../utils/useDarkMode'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Chart from '../components/Chart'


export default function Home() {
const [isDark, toggleDark] = useDarkMode();


return (
<>

  <Head>
    <title>Agents Edge | Dashboard</title>
  </Head>
         
    
      
        <div className="bg-white dark:bg-gray-800 rounded-xl banner-pattern p-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Michael Scott!</h1>
          <p className="mt-2 text-gray-600">Your next level is within reach. Keep climbing!</p>
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <i className="fas fa-trophy text-yellow-500 text-2xl"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">You're #3 in your region this week</p>
              <p className="text-sm text-gray-500">Just $2,450 AP away from #2</p>
            </div>
          </div>
        </div>
        {/*
        <!-- Quick Stats --> */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-5 mt-5">
          <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total AP (Month)</h3>
              <i className="fas fa-chart-bar text-gray-400"></i>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">$42,580</p>
            <p className="mt-1 text-xs text-gray-500">Updated daily</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Policies Placed</h3>
              <i className="fas fa-file-signature text-gray-400"></i>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">18</p>
            <p className="mt-1 text-xs text-gray-500">+2 from last week</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Applications</h3>
              <i className="fas fa-clock text-gray-400"></i>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">7</p>
            <p className="mt-1 text-xs text-gray-500">3 need follow-up</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Policies In Force</h3>
              <i className="fas fa-shield-alt text-gray-400"></i>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">142</p>
            <p className="mt-1 text-xs text-gray-500">98% persistency</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Commission (MTD)</h3>
              <i className="fas fa-dollar-sign text-gray-400"></i>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">$12,450</p>
            <p className="mt-1 text-xs text-gray-500">Updated in real time</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard Summary</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Top 5 Agents (Today)</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">1</div>
                        <span>Sarah Johnson</span>
                    </div>
                    <span className="font-semibold text-accent">$8,450</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">2</div>
                        <span>Michael Chen</span>
                    </div>
                    <span className="font-semibold text-accent">$7,890</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">3</div>
                        <span>You</span>
                    </div>
                    <span className="font-semibold text-accent">$6,750</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">4</div>
                        <span>David Wilson</span>
                    </div>
                    <span className="font-semibold text-accent">$5,620</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">5</div>
                        <span>Jessica Lee</span>
                    </div>
                    <span className="font-semibold text-accent">$4,980</span>
                </div>
            </div>
        </div>
        <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Top 5 Teams (This Week)</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">1</div>
                        <span>Alpha Team</span>
                    </div>
                    <span className="font-semibold text-accent">$42,150</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">2</div>
                        <span>Bravo Team</span>
                    </div>
                    <span className="font-semibold text-accent">$38,760</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">3</div>
                        <span>Charlie Team</span>
                    </div>
                    <span className="font-semibold text-accent">$35,890</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">4</div>
                        <span>Delta Team</span>
                    </div>
                    <span className="font-semibold text-accent">$32,540</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">5</div>
                        <span>Echo Team</span>
                    </div>
                    <span className="font-semibold text-accent">$28,970</span>
                </div>
            </div>
        </div>
    </div>
    <a href="#" className="inline-block mt-4 text-sm font-semibold text-accent hover:underline">View Full Leaderboards</a>
</div>


          </div>
 {/* <!-- Pipeline Snapshot --> */}
 <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Pipeline Snapshot</h2>
              <div className="flex space-x-2">
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#D3202F] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <i className="fas fa-plus mr-1"></i> Add New Lead
                </button>
                {/* <button
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <i className="fas fa-file-upload mr-1"></i> Submit App
                </button> */}
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <i className="fas fa-upload mr-1"></i> Upload Doc
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  gap-4 mt-6">
              {/*
              <!-- New Leads --> */}
              <div className="pipeline-stage text-center p-3 rounded-lg bg-blue-50 cursor-pointer dark:bg-gray-700">
                <div className="text-blue-600 text-2xl font-bold">42</div>
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">New</div>
                <div className="text-xs text-blue-500 mt-1">+5 today</div>
              </div>

              {/*
              <!-- Contacted --> */}
              <div className="pipeline-stage text-center p-3 rounded-lg bg-purple-50 cursor-pointer dark:bg-gray-700">
                <div className="text-purple-600 text-2xl font-bold">28</div>
                <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-1">Contacted</div>
                <div className="text-xs text-purple-500 mt-1">+3 today</div>
              </div>

              {/*
              <!-- Working --> */}
              <div className="pipeline-stage text-center p-3 rounded-lg bg-yellow-50 cursor-pointer dark:bg-gray-700">
                <div className="text-yellow-600 text-2xl font-bold">15</div>
                <div className="text-xs font-semibold text-yellow-600 uppercase tracking-wider mt-1">Working</div>
                <div className="text-xs text-yellow-500 mt-1">+2 today</div>
              </div>

              {/*
              <!-- Quoted --> */}
              <div className="pipeline-stage text-center p-3 rounded-lg bg-green-50 cursor-pointer dark:bg-gray-700">
                <div className="text-green-600 text-2xl font-bold">9</div>
                <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mt-1">Quoted</div>
                <div className="text-xs text-green-500 mt-1">+1 today</div>
              </div>

              {/*
              <!-- Closed --> */}
              <div className="pipeline-stage text-center p-3 rounded-lg bg-red-50 cursor-pointer dark:bg-gray-700">
                <div className="text-red-600 text-2xl font-bold">4</div>
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-1">Closed</div>
                <div className="text-xs text-red-500 mt-1">2 won</div>
              </div>
            </div>

            
          </div>
        </div>
        </div>
       

        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
          {/*
          <!-- Training --> */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Training</h2>
              <div className="mb-4">
                <div className="relative pb-9/16">
                  <img className="w-full h-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Training video" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="p-3 text-white bg-red-600 rounded-full bg-opacity-90 hover:bg-opacity-100">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">This Week's Highlight: Advanced
                  Sales
                  Techniques</h3>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Certification Progress</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <button
                  className="w-full mt-4 px-4 py-2 text-sm font-medium btn-outline-red rounded-lg transition-colors duration-200">
                  Continue Your Training
                </button>
              </div>
            </div>
          </div>

          {/*
          <!-- Activity Feed --> */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Activity Feed</h2>
              <div className="space-y-4 height-28 overflow-y-auto">
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-user-plus text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">New lead assigned</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Robert Johnson from LinkedIn</p>
                      <p className="text-xs text-gray-400">10 minutes ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-file-signature text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Policy submitted</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Whole Life for Sarah Miller</p>
                      <p className="text-xs text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-trophy text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Leaderboard update</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">You're #1 in AP for today</p>
                      <p className="text-xs text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-bullhorn text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">New announcement</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Quarterly bonus program starts next week</p>
                      <p className="text-xs text-gray-400">5 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-calendar-check text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Appointment reminder</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Follow-up with David Wilson tomorrow</p>
                      <p className="text-xs text-gray-400">Yesterday</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                        <i className="text-red-600 fas fa-chart-line text-xs"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Performance report</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Your persistency rate is 98.2%</p>
                      <p className="text-xs text-gray-400">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*
          <!-- KPIs --> */}
          <div className="lg:col-span-1">
            <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Key Performance</h2>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Sales Goal Progress</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">$42,580 / $75,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                  <div className="bg-red-600 h-3 rounded-full" style={{width: '57%'}}></div>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Persistency Rate</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">98.2%</span>
                </div>
                <div className="relative w-full h-64">
                  <Chart/>
                  {/* <canvas id="persistencyChart"></canvas> */}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Conversion Rate</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Lead to Quote</span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                      <div className="bg-red-600 h-1.5 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Quote to Close</span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                      <div className="bg-red-600 h-1.5 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

    
  

</>
)
}