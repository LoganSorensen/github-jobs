import moment from "moment";

export const formatDate = (date) => {
  const createdAt = moment(date);
  const now = moment();
  return createdAt.from(now);
};
