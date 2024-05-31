import React from "react";

export const useCountdownTimer = (date:string) => {
  
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(date);
      const difference = targetDate.getTime() - now.getTime();

      const days  = Math.floor(difference / (1000*60*60*24));
      const hours  = Math.floor((difference / (1000*60*60)) % 24);
      const minutes  = Math.floor((difference / (1000*60)) % 60);
      const seconds  = Math.floor((difference / (1000)) % 60);

      setDays(days);
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000);

    return () => clearInterval(timeInterval)
  },[date]);

  return { days, hours, minutes, seconds }
};

export const formatTargetDate = (value:string) => {
    const targetDate = new Date(value);
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  return targetDate;
}