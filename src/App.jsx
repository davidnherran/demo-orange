import { useState, useRef } from "react";
import ImagenCursor from "./lupa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./App.css";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [zoomed, setZoomed] = useState(false)

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseMove = (event) => {
    setCursorPos({ x: event.clientX + -500, y: event.clientY - 100 });
  };

  const handleZoom = () => {
    setZoomed(true)
  }

  const handleOutZoom = () => {
    setZoomed(false)
  }

  const maskSize = 280;
  const halfMaskSize = maskSize / 2;

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        paddingLeft: "500px",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          clipPath: `circle(${halfMaskSize}px at ${cursorPos.x}px ${cursorPos.y}px)`,
        }}
        ref={divRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="400"
          height="400"
          fill="none"
          version="1.1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="filter26481"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-0"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-02"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-01"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-1"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-7"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-9"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-05"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-6"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-76"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-93"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-03"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-06"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-4"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-8"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-3"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-934"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-42"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-61"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-2"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-74"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-617"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
            <filter
              id="filter26481-69"
              x="-.23136"
              y="-.23136"
              width="1.4627"
              height="1.4627"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.4717376" />
            </filter>
          </defs>
          <path
            d="m373.06 218.6-40.043-87.033m-18.448 222.71 72.529-96.369m-323.95 63.315 84.423 57.017 105.89 3.0003m-24.026-44.26-114.8-37.159-84.33-73.395-20.671 30.818 70.648 94.966m176.67-288.64-26.87 83.717 70.682 94.039-71.31 95.718m-174.99-214.54 30.976-77.385m247.6 86.496-102.93 15.654-116.29 37.285 82.11 64.897m193.03-110.46-1.8068 119.08m-68.638-210.42 70.643 91.304m-0.0733 0.0533-15.849 79.57 13.885 39.445-51.33 60.151-21.231 36.153-61.075 27.088-50.492 7.336-55.457-10.424-67.182-26.12-17.297-30.958-53.42-63.995-0.13906-118.37 75.931-93.793 57.737-32.758 58.974-3.347-116.67 36.113 63.187 24.477-94.301 52.928-44.827 16.464 20.782 87.737 24.278-104.05 59.234 61.81 34.84-114.86 81.509 77.685-34.402 102.29-81.073 50.243-0.89437-115.2-83.393 41.994 32.664 94.619 51.54-21.374 32.933 78.462 81.898-41.481 24.079 44.55 82.144-62.875-106.23 18.659-33.454-87.735 104.68-8.1275 35.116 76.828 37.379-99.66-72.359 22.793 32.315-109.63-76.169-68.054 61.177-15.941-115.97-38.455 54.842 54.369-108.5 6.0577 53.721-60.596 47.226 6.9845 68.747 31.567 14.859 84.067z"
            fill="none"
            opacity=".83502"
            stroke="#FF8A3B"
            strokeOpacity=".85098"
            strokeWidth="1.2186"
          />
          <g
            transform="matrix(.95247 0 0 .95247 8.8015 8.3792)"
            fillRule="evenodd"
            className="group"
            id="app-title"
            onMouseOver={handleZoom}
            onMouseOut={handleOutZoom}
          >
            <circle
              cx="148.22"
              cy="66.289"
              r={zoomed ? "20" : "7.6336"}
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481)"
            />
            <circle cx="147.13" cy="64.554" r={zoomed ? "18" : "7.6336"} fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 115.38 2.4218)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-0)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 60.763 -52.503)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-02)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 88.537 85.868)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-01)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -26.445 123.67)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-1)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -26.056 237.96)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-7)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 54.218 187.04)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-9)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 159.57 179.07)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-05)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 177.8 -13.142)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-6)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 248.19 76.741)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-76)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 192.4 70.319)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-93)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 232.22 157.1)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-03)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 245.42 196.62)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-06)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 193.51 256.11)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-4)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 88.772 274.75)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-8)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 112.44 318.33)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-3)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 6.6398 315)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-934)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -77.175 258.38)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-42)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -109.1 165.4)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-61)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -130.54 195.11)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-2)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -129.75 77.008)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-74)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -86.231 61.145)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-617)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
          <g
            transform="matrix(.95247 0 0 .95247 -54.866 -16.545)"
            fillRule="evenodd"
            className="group"
          >
            <circle
              cx="148.22"
              cy="66.289"
              r="7.6336"
              fill="#000"
              fillOpacity=".38674"
              filter="url(#filter26481-69)"
            />
            <circle cx="147.13" cy="64.554" r="7.6336" fill="#FF8A3B" />
          </g>
        </svg>
      </div>
      <ReactTooltip
        anchorId="app-title"
        place="left"
        style={{ zIndex: 99, backgroundColor: "transparent", color: "#333" }}
      >
        <div style={{ textAlign: "right" }}>
          <h1 style={{ height: "18px" }}>Entrenamiento general</h1>
          <p>
            Después de la formación General, impartimos formación <br />
            práctica para desarrollar consultores internos, centrándonos en
            <br /> casos reales y empleando Suite Digital de Negociación®.
          </p>
        </div>
      </ReactTooltip>
      <ImagenCursor parentRef={divRef} showImage={showImage} />
    </div>
  );
}

export default App;
