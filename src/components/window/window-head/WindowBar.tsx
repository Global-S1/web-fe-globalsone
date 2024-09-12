export const WindowBar = () => {
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
  