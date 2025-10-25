const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          پروفایل
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-3xl w-full">
        {/* Avatar + Info (responsive) */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
          {/* Avatar */}
          <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">
              متین
            </span>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              متین صنعتی
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              توسعه‌دهنده فرانت‌اند
            </p>
            <button className="mt-3 text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline focus:outline-none">
              تغییر عکس
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              نام کامل
            </label>
            <input
              id="fullName"
              type="text"
              defaultValue="متین صنعتی"
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              defaultValue="matin@example.com"
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              نقش
            </label>
            <input
              id="role"
              type="text"
              defaultValue="توسعه‌دهنده فرانت‌اند"
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              درباره من
            </label>
            <textarea
              id="bio"
              rows={4}
              defaultValue="عاشق طراحی رابط‌های کاربری تمیز، ریسپانسیو و فناوری‌های مدرن وب هستم."
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              ذخیره تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
