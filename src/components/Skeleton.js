import { FiArrowRight } from "react-icons/fi";
const Skeleton = ({ nicknames }) => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row items-center w-full overflow-hidden rounded mt-10 border border-violet-300 bg-violet-100 rounded-lg  space-y-4 md:space-y-0">
      <div className="flex md:w-36 w-full bg-violet-300 h-48  items-center self-stretch justify-center"></div>
      <div className="md:ml-10 w-full self-stretch  flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-4 md:p-0 p-3">
          <div className="text-3xl w-16 h-8 text-center rounded md:text-left font-bold  bg-violet-200"></div>
          {nicknames !== undefined && (
            <div className="text-lg">
              <div className="font-bold text-violet-500">Nicknames:</div>
              <div className="flex flex-wrap">
                {Array.from(Array(nicknames).keys()).map((_, index) => (
                  <span
                    key={index}
                    className="px-2 animate-pulse  w-16 h-8 bg-violet-300 text-white d-inline mr-1  my-1  rounded-lg"
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="animate-pulse bg-violet-300 md:w-16 w-full justify-center items-center self-stretch flex flex-col  ease-out duration-300  md:flex-row items-center justify-center md:border-l-2 border-t-2 md:border-t-0 border-violet-300 hover:bg-violet-500 justify-center">
          <FiArrowRight className="text-5xl stroke-[#8b5cf6]  ease-out duration-300 hover:stroke-[#fff] w-full md:h-full" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
//   <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
//     <div class=" flex space-x-4">
//       <div class="rounded-full bg-violet-400 h-10 w-10"></div>
//       <div class="flex-1 space-y-6 py-1">
//         <div class="h-2 bg-violet-400 rounded"></div>
//         <div class="space-y-3">
//           <div class="grid grid-cols-3 gap-4">
//             <div class="h-2 bg-violet-400 rounded col-span-2"></div>
//             <div class="h-2 bg-violet-400 rounded col-span-1"></div>
//           </div>
//           <div class="h-2 bg-violet-400 rounded"></div>
//         </div>
//       </div>
//     </div>
//   </div>;
