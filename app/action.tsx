"use client";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number, limit: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}`
  );
  const data = await response.json();

  const jsxData = data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));

  return jsxData;
};
