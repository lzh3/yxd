import moment from "moment";
// 返回 2022-05-23 12:20:20格式
export const dateFormate = (date) => {
  return date ? moment(date).format("YYYY-MM-DD hh:mm:ss") : "--";
};
