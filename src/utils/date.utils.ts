import { format, subMonths, addMonths } from 'date-fns';

export const formatDate = (formatString: string, date?: Date) => {
  if (date) {
    return format(new Date(date), formatString);
  }
  return '';
};

export const getFlightStatusByDate = (currentDate: Date) => {
  const today = new Date();

  const previousSix = subMonths(currentDate, 6).getTime();
  const nextSix = addMonths(currentDate, 6).getTime();

  if (currentDate.getTime() < nextSix && currentDate.getTime() >= today.getTime()) {
    return 'upcomingsix';
  }

  if (previousSix > currentDate.getTime() && currentDate.getTime() <= today.getTime()) {
    return 'pastsix';
  }

  return 'rest';
};
