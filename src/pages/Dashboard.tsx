

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-40 bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md"
          >
            Box {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
