import dayjs from 'dayjs';

const calculateAge = (birthDate: string): string => {
  const now = dayjs();
  const birth = dayjs(birthDate);
  const years = now.diff(birth, 'year');
  if (years < 1) {
    const months = now.diff(birth, 'month');
    return `${months} month${months > 1 ? 's' : ''} old`;
  } else {
    return `${years} year${years > 1 ? 's' : ''} old`;
  }
};

export { calculateAge };
