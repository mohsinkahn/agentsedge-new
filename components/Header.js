export default function Header({ toggleDark,onToggleMobileSidebar }) {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="text-xl font-bold text-red-600">
      <button
        className="md:hidden text-gray-700 dark:text-gray-200"
        onClick={onToggleMobileSidebar}
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>
      </div>
      <div className="space-x-4">
        <button onClick={toggleDark} className="text-gray-500 dark:text-gray-300">
          <i className="fas fa-moon dark:hidden"></i>
          <i className="fas fa-sun hidden dark:block"></i>
        </button>
        <button className="text-gray-500"><i className="fas fa-bell"></i></button>
        <button className="text-gray-500"><i className="fas fa-question-circle"></i></button>
      </div>
    </div>
  );
}
