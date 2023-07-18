const phoneBook = {
    'Anna': '6224486020',
    'Sera': '7890123456',
    'Nakshathra': '7845961224',
    'Sania': '6224846896'
  };
  function findPhoneNumber(name) {
    if (name in phoneBook) {
      return phoneBook[name];
    } else {
      return 'Phone number not found.';
    }
  }
  const name = 'Anna';
  const phoneNumber = findPhoneNumber(name);
  console.log(`Phone number for ${name}: ${phoneNumber}`);