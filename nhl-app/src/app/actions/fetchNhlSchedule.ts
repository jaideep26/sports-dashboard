"use server";
import { Schedule } from "@/app/models/Schedule";

//TODO - replace with internal API call
export const fetchNhlSchedule = async (): Promise<Schedule | undefined> => {
  try {
    const res = await fetch("https://api-web.nhle.com/v1/schedule/now", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data: Schedule = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching NHL schedule data", error);
    return undefined;
  }
};
