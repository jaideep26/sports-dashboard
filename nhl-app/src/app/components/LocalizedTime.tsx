export const LocalizedTime = ({ date }: { date: string | Date }) => {
  const formattedDate = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return <time dateTime={date.toString()}>{formattedDate}</time>;
};
