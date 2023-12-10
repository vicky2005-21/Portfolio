import React from "react";

export default function BrandIcon() {
  return (
    <>
      <style jsx>{`
            #brand path {
              @apply transition-all duration-500 ease-in-out;
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: animate 8s ease-in-out forwards infinite;
            }

            @keyframes animate {
              0% {
                stroke-dashoffset: 0;
                stroke-dasharray: 500;
              }
              50% {
                stroke-dashoffset: 500;
                stroke-dasharray: 100;
              }
              100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 500;
              }
            }

            #brand stop:nth-child(1) {
              animation: gradient 4s ease infinite alternate;
            }

            #brand stop:nth-child(2) {
              animation: gradient 4s ease infinite;
            }

            @keyframes gradient {
              0% {
                stop-color: #A293FF;
              }
              50% {
                stop-color: #00F0FF;
              }
              100% {
                stop-color: #A293FF;
              }
            }

            #brand:hover > * {
                animation-play-state: paused;
            }
            `}</style>

<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="230" height="130" viewBox="0 50 274 192">
  <path d="M89 68c0 .7 3.6 9.3 8 19.2s8 18.3 8 18.7c0 1.9 4.9 5.1 7.9 5.1 3.9 0 3.9-.1-2.4-13.5-2.4-5-5.9-12.8-8-17.5s-4.5-9.3-5.4-10.2C95 67.6 89 66.2 89 68zm41.1 1.2c-4.8 2.3-5.4 3.4-11 18.2-4.6 12.3-4.8 13.7-2.2 18.4l1.8 3.4 2.2-5.4c9.7-22.5 14.9-35.8 14.2-36.2-.4-.3-2.7.4-5 1.6zM81.6 80.9c-2.2 4.7-6.1 13.4-8.7 19.3l-4.6 10.6 4.3.4c3.3.2 4.5-.1 4.9-1.2 1-3 7.5-6.3 13.1-6.8 4.1-.3 5.7-.9 6.5-2.4 1.7-3.1-.6-4.8-6.6-4.8-2.8 0-5.4-.3-5.7-.6-.4-.3.1-2.2.9-4.2 1.8-4.1 2.2-14.8.7-17.3-.7-1.3-1.7.2-4.8 7z"/>
</svg>

    </>
  );
}
