const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          تنظیمات
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-2xl">
        <div className="space-y-5">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              حساب کاربری
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              تنظیمات حساب خود را مدیریت کنید
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  اعلان‌های ایمیلی
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  به‌روزرسانی‌ها را از طریق ایمیل دریافت کنید
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 peer-checked:after:translate-x-5 rtl:peer-checked:after:translate-x-0 rtl:after:left-auto rtl:after:right-[2px] dark:border-gray-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  احراز هویت دو مرحله‌ای
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  یک لایه امنیتی اضافه ایجاد کنید
                </p>
              </div>
              <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                فعال‌سازی
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              حذف حساب کاربری
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
