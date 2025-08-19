{
   /* Video Section */
}
import { useState, useRef, useEffect } from "react";

const VideoSection = ({ aboutRef }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const videoRef = useRef(null);

   const handlePlay = () => {
      setIsPlaying(true);
   };

   const handlePause = () => {
      setIsPlaying(false);
   };

   const handleVideoClick = () => {
      if (videoRef.current) {
         if (videoRef.current.paused) {
            videoRef.current.play();
         } else {
            videoRef.current.pause();
         }
      }
   };

   const handleOverlayClick = () => {
      if (videoRef.current) {
         videoRef.current.play();
      }
   };

   useEffect(() => {
      const video = videoRef.current;
      if (video) {
         video.addEventListener("play", handlePlay);
         video.addEventListener("pause", handlePause);

         return () => {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
         };
      }
   }, []);

   return (
      <section
         id="about"
         ref={aboutRef}
         className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]"></div>

         <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
               Our{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Innovation
               </span>
            </h2>

            <div className="flex justify-center">
               <div className="relative w-full max-w-4xl group">
                  {/* Video container with animated border */}
                  <div className="relative rounded-xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
                     {/* Animated gradient border */}
                     <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md"></div>

                     {/* Video player with thumbnail */}
                     <div className="relative bg-black rounded-xl overflow-hidden z-10 aspect-video flex items-center justify-center">
                        {/* Video thumbnail with play button overlay - conditionally rendered */}
                        {!isPlaying && (
                           <div
                              className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 cursor-pointer z-20"
                              onClick={handleOverlayClick}
                           >
                              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl shadow-blue-500/30">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-white ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </div>
                           </div>
                        )}

                        {/* Video element */}
                        <video
                           ref={videoRef}
                           className="w-full h-full object-contain"
                           poster="/placeholder-video-thumbnail.jpg"
                           controls
                           onClick={handleVideoClick}
                        >
                           <source
                              src="/home_health_service_video.mp4"
                              type="video/mp4"
                           />
                           Your browser does not support the video tag.
                        </video>
                     </div>
                  </div>

                  {/* Floating elements for visual interest */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-300"></div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default VideoSection;
