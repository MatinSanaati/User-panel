const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 dark:text-white">
          داشبورد
        </h2>
      </div>

      {/* آمارها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            title: "تعداد کاربران",
            value: "۱۲.۴ هزار",
            change: "٪۱۲+",
            icon: "👥",
          },
          { title: "درآمد", value: "۴۲,۵۶۷$", change: "٪۸.۲+", icon: "💰" },
          {
            title: "نشست‌های فعال",
            value: "۱,۸۴۲",
            change: "٪۳.۱+",
            icon: "📊",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 ml-1 rtl:ml-0 rtl:mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  {stat.change} نسبت به ماه گذشته
                </p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* فعالیت‌های اخیر */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          فعالیت‌های اخیر
        </h3>
        <ul className="space-y-3">
          {[
            "کاربر جدیدی ثبت‌نام کرد",
            "پرداختی از شرکت Acme دریافت شد",
            "پشتیبان‌گیری سیستم انجام شد",
            "پیام جدیدی از تیم پشتیبانی دریافت شد",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 rtl:gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
