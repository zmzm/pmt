import { styled } from '@mui/joy/styles';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CustomCalendar = styled(Calendar)(({ theme }) => ({
  border: 'none',
  fontFamily: theme.fontFamily.body,
  '& .react-calendar__month-view__weekdays__weekday': {
    display: 'none',
  },
  '& .react-calendar__tile--now': {
    background: 'none',
  },
  '& .react-calendar__tile': {
    marginBottom: theme.spacing(2.5),
  },
  '& .react-calendar__tile.react-calendar__tile--hover': {
    background: theme.vars.palette.primary.softBg,
  },
  '& .react-calendar__tile--active': {
    color: 'initial',
    background: theme.vars.palette.primary.softBg,
  },
  '& .react-calendar__month-view__days__day--weekend': {
    color: 'initial',
  },
  '& .react-calendar__tile--hasActive': {
    background: theme.vars.palette.primary.softBg,
  },
  '& .react-calendar__tile--rangeEnd, .react-calendar__tile--rangeStart': {
    color: theme.colorSchemes.light.palette.primary[500],
  },
}));
