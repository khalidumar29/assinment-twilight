import SectionContainer from "@/utils/SectionContainer";
import { ArrowRight } from "lucide-react";

const ShoCase = () => {
  return (
    <SectionContainer>
      <div className="container relative mt-12">
        <div className="rounded-md bg-[#2323237c]">
          <img
            src="/shocase.png"
            alt="Image"
            height="650"
            width="800"
            className="w-full min-h-[350px] lg:max-h-[720px] rounded-md object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 p-2 lg:p-4 lg:py-8 flex items-center lg:items-end justify-end w-full h-full">
          <div className="lg:flex item-center lg:items-end justify-center lg:justify-center w-full">
            <div className="w-full p-5 lg:px-10 lg:w-2/5">
              <h3 className="text-white text-xl sm:text-2xl mb-5 text-center font-semibold lg:text-left">
                Simple & Decidedly
              </h3>
              <div>
                <button className="mx-auto lg:mx-0 rounded-[3px] group text-sm font-medium p-2 lg:py-3 px-4 lg:px-6 flex items-center gap-x-2 bg-[#8F8F8F] text-white">
                  <span>SHOP NOW</span>
                  <span className="group-hover:rotate-0 duration-300 rotate-[-45deg]">
                    <ArrowRight size={18} strokeWidth={3} />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full my-2 mt-5 lg:mt-0 lg:w-3/5">
              <div className="text-gray-200 flex items-center gap-1 text-center justify-center">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg flex items-center justify-center w-[70px] h-16 sm:w-28 sm:h-28 font-bold bg-[#23232370]"
                    >
                      <div>
                        <h6 className="text-2xl md:text-3xl lg:text-5xl">0</h6>
                        <span className="text-xs sm:text-sm lg:text-md text-center">
                          Days
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ShoCase;
