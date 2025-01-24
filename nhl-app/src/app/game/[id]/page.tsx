import { fetchGameData } from "@/app/actions/fetchGameData";
import { GameDetailView } from "@/app/components/GameDetailView";

interface GamePageProps {
  params: { id: string };
}

export default async function Page({ params }: GamePageProps) {
  const { id } = params;
  const gameData = await fetchGameData(id);

  if (!gameData) {
    return <div>Error occurred while fetching game details.</div>;
  }
  return <GameDetailView gameData={gameData} />;
}
