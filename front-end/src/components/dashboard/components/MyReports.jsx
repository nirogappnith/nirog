import React from "react";

const RecordList = ({ records }) => {
  return (
    <div className="space-y-4">
      {records.map((record, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-100 p-4 rounded-lg"
        >
          <div className="bg-gray-300 p-4 rounded text-center">
            <span className="font-bold text-lg">{record.date}</span>
          </div>
          <div className="ml-4 ">
            {record.type === "patient" ? (
              <img
                src="green arrow.png"
                alt="Patient"
                className="rounded-full"
                style={{ width: "50px", height: "50px" }}
              />
            ) : (
              <img
                src="red arrow.png"
                alt="Doctor"
                className="rounded-full"
                style={{ width: "50px", height: "50px" }}
              />
            )}
          </div>
          <div className="ml-4 text-center">
            <h3 className="text-lg font-semibold ">
              RECORDS ADDED BY {record.type.toUpperCase()}
            </h3>

            <p className="text-gray-600">Records for {record.name}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              VIEW REPORT
            </button>
          </div>
        </div>
      ))}
      <button className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full py-3 px-4 text-2xl shadow-lg hover:bg-blue-700 transition-colors">
        +
      </button>
    </div>
  );
};

const MyReports = () => {
  const records = [
    { date: "09 MAR", type: "patient", name: "Ekansh Mahajan" },
    { date: "15 MAR", type: "doctor", name: "Ekansh Mahajan" },
    // ... more records
  ];

  return (
    <div className="container mx-auto p-4">
      <RecordList records={records} />
    </div>
  );
};

export default MyReports;
