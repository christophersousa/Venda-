interface ProxyDropDown {
    name: string;
    list: Array<string>;
  }

  export function DropDown({ name, list }: ProxyDropDown) {
    return (
      <div>
        <div className="flex justify-center">
          <div>
            <div className="dropdown relative">
              <div
                className="
                  dropdown-toggle
                  flex
                  items-center
                  cursor-pointer
                  whitespace-nowrap
                "
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {name}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </div>
              <ul
                className="
                  dropdown-menu
                  min-w-max
                  absolute
                  hidden
                  flex-wrap
                  flex-col
                  bg-white
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  m-0
                  bg-clip-padding
                  border-none
                  h-80
                  overflow-y-auto
                  overflow-x-hidden
                "
                aria-labelledby="dropdownMenuButton1"
              >
                {list.map((e) => {
                  return (
                    <li>
                      <a
                        className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                        href="#"
                      >
                        {e}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }