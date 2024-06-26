const isValidEmail = (email:string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber:string) => {
  let response:string;
  const phoneRegex = /^\d{11}$/;
  const phoneNumberStartValue = phoneNumber.slice(0,4);
  const startValueList = [
    '0701', '0703', '0704', '0705', '0706', '0707', '0708', '0802','0803','0804','0805','0806','0807','0808','0809','0810','0811','0812','0813',
    '0814','0815','0816','0817','0818','0819','0909','0908','0901','0902','0903','0904','0905','0906','0907','0915','0913','0912','0916','0911'];

  const isElevenDigits = phoneRegex.test(phoneNumber);
  const isValidPhoneNumber = startValueList.includes(phoneNumberStartValue) && !Number.isNaN(Number(phoneNumber))

  if (!isElevenDigits) {
    response = 'isNotEleventDigits'
    return { response, phoneNumberStartValue }; 
  }

  if (!isValidPhoneNumber) {
    response = 'isNotAValidPhoneNumber'
    return { response, phoneNumberStartValue };
  }
};

export { isValidEmail, isValidPhoneNumber }