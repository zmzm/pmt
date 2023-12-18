import { format } from 'date-fns';

export const formatDate = (date: Date | null, dateFormat = 'yyyy-MM-dd') => {
  if (date) {
    return format(new Date(date), dateFormat);
  }

  return '';
};
