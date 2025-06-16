import React from 'react'

function DashboardtableRow() {
  return (
     <div className="bg-white min-h-screen text-sm">
      {/* Header */}
      <div className="mb-4 px-6 pt-6">
        <h2 className="font-semibold text-lg">Support Ticket #10005</h2>
        <p className="text-gray-500 text-xs">
          Created: October 02, 2024 - 01:57pm — Claimed by Clark Kelly, Sharkey Jin, Abhishek Jain <a href="#" className="text-blue-500 ml-1">Edit</a>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center w-full mb-4 px-6">
        <div className="flex-1 h-2 bg-gray-300 rounded-l-full" />
        <div className="flex-1 h-2 bg-gray-400" />
        <div className="flex-1 h-2 bg-orange-500" />
        <div className="flex-1 h-2 bg-gray-300 rounded-r-full" />
      </div>

      <div className="grid grid-cols-3 gap-4 px-6 pb-6">
        {/* Left Side */}
        <div className="col-span-2 space-y-4">
          <div className="border rounded p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold  text-3xl">Sterling Infotech</h3>
                <p className="text-xs text-gray-600">
                  sterling - 236, Maharani Farm<br />
                  Edit New Last<br />
                  1234244444<br />
                  arshd_77777@yahoo.co.in
                </p>
                <a href="#" className="text-blue-500 text-xs">Edit Contact</a>
              </div>
              <a href="#" className="text-blue-500 text-xs">Edit Ticket</a>
            </div>

            <div className="text-xs mt-4 space-y-1">
              <div className="flex justify-between border-b py-1">
                <span>Sites</span>
                <span className="text-gray-600">sterling</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Asset</span>
                <span className="text-blue-600">Testgc1 - #787979</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 px-2 py-1 rounded">WARRANTY</span>
                <span className="bg-gray-100 px-2 py-1 rounded">OUT OF WARRANTY</span>
                <span className="bg-blue-100 px-2 py-1 rounded text-blue-500">FOC</span>
                <span className="bg-gray-100 px-2 py-1 rounded">PARTS REQUIRED</span>
                <span className="bg-yellow-100 px-2 py-1 rounded text-yellow-600">NO PARTS</span>
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium">Title</label>
              <select className="w-full mt-1 border p-1 rounded">
                <option>Event - 22th Aug</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block font-medium">Description</label>
              <p className="text-gray-700">test <a href="#" className="text-blue-500 text-xs ml-2">Edit Description</a></p>
            </div>

            <div className="mt-4">
              <label className="block font-medium">Attachments</label>
              <div className="flex gap-4 mt-2">
                <div className="border w-1/3 h-28 p-2 flex flex-col items-center justify-center text-xs">
                  Dummy File
                  <div className="mt-2 flex gap-2">
                    <span className="cursor-pointer">⬇</span>
                    <span className="cursor-pointer">🗑️</span>
                  </div>
                </div>
                <div className="border w-1/3 h-28"></div>
                <div className="border w-1/3 h-28"></div>
              </div>
            </div>
          </div>

          <div className="border rounded p-4">
            <h4 className="font-semibold mb-2">Ticket History</h4>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left">
                  <th>Asset</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asset</td>
                  <td><span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Resolved</span></td>
                  <td>October 02, 2024</td>
                </tr>
                <tr>
                  <td>Site</td>
                  <td><span className="bg-green-100 text-green-600 px-2 py-1 rounded">Open</span></td>
                  <td>May 14, 2025</td>
                </tr>
                <tr>
                  <td>Event - 22th Aug</td>
                  <td><span className="bg-green-100 text-green-600 px-2 py-1 rounded">Open</span></td>
                  <td>May 14, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <div className="border rounded p-4">
            <div className="text-xs text-gray-600">Total Time</div>
            <div className="text-green-600 font-bold text-3xl">22hrs 59mins</div>
            <a href="#" className="text-blue-500 text-xs">View Time</a>
            <div className="mt-2 text-xs font-medium">Technicians</div>
            <p>User1</p>
            <div className="mt-2 flex gap-2">
              <a className="bg-gray-200 text-xs px-2 py-1 rounded">Start Timer</a>
              <a className="bg-gray-200 text-xs px-2 py-1 rounded">Add Time</a>
            </div>
            <div className="mt-2 flex gap-2">
              <a className="bg-gray-200 text-xs px-2 py-1 rounded">Add Technician</a>
              <a className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Onsite Technician Required</a>
            </div>
          </div>

          <div className="border rounded p-4">
            <h4 className="font-semibold mb-2">Comments / Updates</h4>
            <textarea
              placeholder="Start typing..."
              className="w-full border rounded p-2 mb-2 text-sm"
            ></textarea>
            <div className="flex gap-2 mb-2">
              <a className="bg-gray-100 px-2 py-1 rounded">📞</a>
              <a className="bg-gray-100 px-2 py-1 rounded">🗒️</a>
              <a className="bg-gray-100 px-2 py-1 rounded">📷</a>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-sm">Second comment...</p>
                <p className="text-xs text-right text-gray-500">Clark Kelly — Thursday, February 06 2025 - 01:22AM</p>
                <div className="text-right text-xs">
                  <a href="#" className="text-blue-500">Edit</a> · <a href="#" className="text-blue-500">Delete</a>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-sm">testing...</p>
                <p className="text-xs text-right text-gray-500">Clark Kelly — Sunday, November 17 2024 - 04:13PM</p>
                <div className="text-right text-xs">
                  <a href="#" className="text-blue-500">Edit</a> · <a href="#" className="text-blue-500">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardtableRow