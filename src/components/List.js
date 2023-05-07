import { FiArrowRight } from "react-icons/fi";

const List = ({ character }) => {
  const { name, images, about, nicknames, url } = character;

  return (
    <div className="flex flex-col md:flex-row items-center w-full overflow-hidden rounded mt-10 border border-violet-500 bg-gray-100 rounded-lg  space-y-4 md:space-y-0">
      <div className="flex items-center self-stretch justify-center">
        <img
          src={images.jpg.image_url || images.webp.image_url}
          alt={name}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="md:ml-10 w-full self-stretch  flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-4 md:p-0 p-3">
          <div className="text-3xl text-center md:text-left font-bold text-violet-500">
            {name}
          </div>
          {nicknames.length > 0 && (
            <div className="text-lg">
              <div className="font-bold text-violet-500">Nicknames:</div>
              <div className="flex flex-wrap">
                {nicknames.map((nickname, index) => (
                  <span
                    key={index}
                    className="px-2 bg-violet-500 text-white d-inline mr-1  my-1  rounded-lg"
                  >
                    {nickname}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <a
          href={url}
          target="_blank"
          className="md:w-16 w-full justify-center items-center self-stretch flex flex-col  ease-out duration-300  md:flex-row items-center justify-center md:border-l-2 border-t-2 md:border-t-0 border-violet-500 hover:bg-violet-500 justify-center"
          rel="noreferrer"
        >
          {/* <div className="w-full"> */}
          <FiArrowRight className="text-5xl stroke-[#8b5cf6]  ease-out duration-300 hover:stroke-[#fff] w-full md:h-full" />
          {/* </div> */}
        </a>
      </div>
    </div>
  );
};

export default List;
