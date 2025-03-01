import { fetchNhlSchedule } from "./actions/fetchNhlSchedule";
import { ScheduleView } from "./components/ScheduleView/ScheduleView";

export default async function Page() {
  const schedule = await fetchNhlSchedule();
  if (!schedule) {
    return <div>Error occurred while fetching NHL Schedule.</div>;
  }
  return <ScheduleView schedule={schedule} />;
}
