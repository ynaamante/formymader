import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import config from "./config";

// Dynamically import only the required music images
const imageFiles = import.meta.glob("../assets/music/*.png");

function Music() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null); // ▶️ store selected YouTube video
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        config.musicGallery.map(async (song, index) => {
          const imagePath = `../assets/music/${index + 1}.png`;
          if (imageFiles[imagePath]) {
            const imageModule = await imageFiles[imagePath]();
            return {
              albumCover: imageModule.default,
              title: song.title || "No Title",
              artist: song.artist || "Unknown Artist",
              left: song.left || "0%",
              top: song.top || "0%",
              youtubeId: song.youtubeId || null, // ⬅️ include YouTube ID
            };
          }
          return null;
        })
      );

      setSongs(loadedImages.filter((song) => song !== null));
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          {config.musicTitle}
        </h1>

        <div ref={containerRef} className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: song.left, top: song.top }}
              drag
              dragConstraints={containerRef}
              onClick={() => setCurrentVideoId(song.youtubeId)} // ▶️ set selected video
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem] cursor-pointer hover:bg-white/20 transition">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">{song.title}</h2>
                  <p className="text-white/70 text-xs truncate">{song.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ▶️ YouTube Player */}
        {currentVideoId && (
          <div className="flex justify-center mb-4">
            <iframe
              width="320"
              height="180"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="YouTube player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {/* Navigation Button */}
        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
