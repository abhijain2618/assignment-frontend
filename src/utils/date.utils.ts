import { format } from 'date-fns';

export const formatDate = (formatString: string, date?: Date) => {
  if (date) {
    return format(new Date(date), formatString);
  }
  return '';
};
