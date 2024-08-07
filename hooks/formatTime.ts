export const formatTime = ({date, time}:{date:Date, time:string}) => {

  if (date as Date && time !== '') {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const dateValue = newDate.getDate();
    const month = newDate.getMonth();
    let hour = parseInt(time.split(':')[0]);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const ampm = hour >= 12 ? "PM" : "AM";
  
    hour = hour % 12;
    hour = hour ? hour : 12;

    const formatedDate = dateValue + ' ' + months[month]+',' + ' ' + year;
    const formatedTimeString = dateValue + ' ' + months[month] + ' ' + year + ' ' + 'by' + ' ' + hour + '' + ampm;
   return { formatedTimeString, formatedDate };
  };

  return;
};


export const formatDate = (date:string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const dateValue = newDate.getDate();
  const month = newDate.getMonth();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const formatedDate = dateValue + ' ' + months[month]+',' + ' ' + year;

  return formatedDate;
}