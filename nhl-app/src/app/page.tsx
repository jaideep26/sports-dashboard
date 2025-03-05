import { fetchNhlSchedule } from "./actions/fetchNhlSchedule";
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection";

export default async function Page() {
  const schedule = await fetchNhlSchedule();
  if (!schedule) {
    return <div>Error occurred while fetching NHL Schedule.</div>;
  }
  return <ScheduleSection schedule={schedule} />;
}
