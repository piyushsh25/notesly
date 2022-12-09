// import dayjs from "dayjs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
type Date = {
  createDate: string;
};
export const Time = ({ createDate }: Date) => {
  dayjs.extend(relativeTime);
  return <>{dayjs(createDate).fromNow(false)}</>;
};
