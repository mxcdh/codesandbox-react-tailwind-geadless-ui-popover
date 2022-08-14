import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const solutions = [
  {
    name: "Products",
    description: "Browse products by category",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Search",
    description: "Search for items and brands",
    href: "##",
    icon: IconTwo,
  },
];

export const Header = () => {
  return (
    <div className="fixed w-full max-w-sm px-4 top-16">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
               
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="pt-3">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="grid grid-cols-1 gap-8 bg-white p-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center w-10 h-10 text-white shrink-0 sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          More
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Go to the full menu.
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        stroke="#FB923C"
        strokeWidth="2"
      />
    </svg>
  );
}
