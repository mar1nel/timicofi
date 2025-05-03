import React from "react";
import "./HeartTooltip.scss";

const HeartTooltip = () => {
    return (
        <div className="tooltip">
            <button type="button" aria-label="trigger" className="sizer trigger">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sizer heart"
                    viewBox="0 0 256 256"
                    strokeWidth="0"
                    fill="currentColor"
                    stroke="currentColor"
                >
                    <path
                        opacity="0.2"
                        className="fill"
                        d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z"
                    ></path>
                    <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
                </svg>

                <svg className="sizer checkround" viewBox="0 0 44 44">
                    <path
                        transform="translate(-2.000000, -2.000000)"
                        d="M 39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                    ></path>
                </svg>
            </button>


        </div>
    );
};

export default HeartTooltip;
