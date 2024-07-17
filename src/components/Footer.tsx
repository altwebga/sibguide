export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800" />
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between space-y-8 px-4 py-8 sm:flex-row sm:space-y-0">
        <p className="text-sm text-gray-500 dark:text-gray-400"></p>
        Copyright © 2022-{new Date().getFullYear()} SIB Guide. All rights
        reserved.
      </div>
    </footer>
  );
};
