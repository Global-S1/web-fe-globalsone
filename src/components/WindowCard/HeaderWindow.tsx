import { FC } from "react";

const HeaderWindow = () => {
  return (
    <>
      <svg
        viewBox="0 0 1248 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
        }}
      >
        <g filter="url(#filter0_d_771_72)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 0C21.9086 0 4 17.9086 4 40V81.3456C4 84.7708 4.43053 88.0955 5.24041 91.2685C9.65397 73.9771 25.3339 61.1914 44 61.1914H1204C1222.67 61.1914 1238.35 73.9771 1242.76 91.2685C1243.57 88.0955 1244 84.7708 1244 81.3455V40C1244 17.9086 1226.09 0 1204 0H44Z"
            fill="#2C2D77"
            style={{
              mixBlendMode: "screen",
              transform: "scale(1.01)",
              transformOrigin: "center",
            }}
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_771_72"
            x="0"
            y="0"
            width="1248"
            height="99.2686"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_771_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_771_72"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

const colors = {
  active: "#7F87B7",
  inactive: "#0E1330",
};

const borderOrientation = {
  complete: "rounded-[18px] xl:rounded-[40px]  border-t-2",
  left: "rounded-tr-[18px] rounded-b-[18px] xl:rounded-tr-[40px] xl:rounded-b-[40px]  border-t-2",
  right:
    "rounded-tl-[18px] rounded-b-[18px] xl:rounded-tl-[40px] xl:rounded-b-[40px]  border-t-2",
};

interface Prop {
  active?: boolean;
}

export const HeaderWindowCard:FC<Prop> = ({ active }) => {
  const dotColor = active ? colors.active : colors.inactive;
  const dotCount = new Array(3).fill(null);

  return (
    <div className="absolute w-full z-10">
      <div className="relative">
        <HeaderWindow />
        <div className="absolute top-[26%] left-[1.7%] flex justify-start items-center space-x-[2px] sm:space-x-[4px] xl:space-x-[7px]">
          {dotCount.map((_, index) => (
            <div
              key={index}
              className="w-[3.8px] ms:w-[5px] md:w-[7px] lg:w-[11px] h-[3.8px] sm:h-[5px] md:h-[7px] lg:h-[11px] xl:h-[15px] xl:w-[15px] rounded-full "
              style={{ backgroundColor: dotColor }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
