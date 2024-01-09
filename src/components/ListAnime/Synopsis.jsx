"use client";
import { useState } from "react";
import React from "react";

const Synopsis = ({ anime }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  const truncateSynopsis = (text, maxLength = 300) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.slice(0, maxLength);
    return `${truncatedText}...`;
  };

  return (
    <p className="text-white text-sm">
      {showFullSynopsis ? anime.data.synopsis.replace("[Written by MAL Rewrite]", "") : truncateSynopsis(anime.data.synopsis.replace("[Written by MAL Rewrite]", ""))}
      {anime.data.synopsis.length > 300 && (
        <span className="cursor-pointer text-secondary" onClick={() => setShowFullSynopsis(!showFullSynopsis)}>
          {showFullSynopsis ? " Lebih Sedikit" : " Lihat Selengkapnya"}
        </span>
      )}
    </p>
  );
};

export default Synopsis;
