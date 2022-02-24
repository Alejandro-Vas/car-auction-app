function unixTimeToEndConverter(now, end) {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;

  const distance = end - now;

  const minutes = `${Math.floor((distance % HOUR) / MINUTE)}`;
  const seconds = `${Math.floor((distance % MINUTE) / SECOND)}`;

  const minutesPadded = minutes.padStart(2, '0');
  const secondsPadded = seconds.padStart(2, '0');
  return `${minutesPadded}:${secondsPadded}`;
}
export default unixTimeToEndConverter;
