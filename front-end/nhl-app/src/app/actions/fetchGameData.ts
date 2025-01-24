"use server";

import { GameDetail } from "../models/GameDetail";

export const fetchGameData = async (
  gameId: string
): Promise<GameDetail | undefined> => {
  try {
    const res = await fetch(
      `https://api-web.nhle.com/v1/gamecenter/${gameId}/boxscore`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data: GameDetail = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching NHL schedule data", error);
    return undefined;
  }
};
