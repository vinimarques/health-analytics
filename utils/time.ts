export const timestrToSec = (timestr: string) => {
  const parts: string[] = timestr.split(':');
  return (
    parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2])
  );
};

export const pad = (num: number) => {
  if (num < 10) {
    return '0' + num;
  } else {
    return '' + num;
  }
};

export const formatTime = (seconds: number) => {
  return [
    `${pad(Math.floor(seconds / 3600))}h`,
    `${pad(Math.floor(seconds / 60) % 60)}m`,
  ].join(' ');
};

export const formatDate = (date: Date) => {
  const options: object = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const newDate = new Date(date.toString().replace(/-/g, '/'));
  return newDate.toLocaleDateString(navigator.language, options);
};
