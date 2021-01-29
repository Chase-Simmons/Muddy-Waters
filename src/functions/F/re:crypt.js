let encryptedString = '';
let decryptedString = '';

const ranNum = () => {
  const number = Math.floor(Math.random() * 4) + 1;
  return number;
};
const encrypt = () => {
  const string =
    '*login*name:hiraeth,password:password,&*stats*str:15,dex:3,vit:4,def:4,agi:3,arc:4,pie:1,&';

  console.log(string.length);
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        switch (ranNum()) {
          case 1:
            encryptedString += '0101010101';
            break;
          case 2:
            encryptedString += '0010010010';
            break;
          case 3:
            encryptedString += '0001000100';
            break;
          case 4:
            encryptedString += '0000100001';
            break;
        }
        break;
      case 'b':
        switch (ranNum()) {
          case 1:
            encryptedString += '0110110110';
            break;
          case 2:
            encryptedString += '0011001100';
            break;
          case 3:
            encryptedString += '0001100011';
            break;
          case 4:
            encryptedString += '0000110000';
            break;
        }
        break;
      case 'c':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111011101';
            break;
          case 2:
            encryptedString += '0011100111';
            break;
          case 3:
            encryptedString += '0001110001';
            break;
          case 4:
            encryptedString += '0000111000';
            break;
        }
        break;
      case 'd':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111101111';
            break;
          case 2:
            encryptedString += '0011110011';
            break;
          case 3:
            encryptedString += '0001111000';
            break;
          case 4:
            encryptedString += '0000111100';
            break;
        }
        break;
      case 'e':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111110111';
            break;
          case 2:
            encryptedString += '0011111001';
            break;
          case 3:
            encryptedString += '0001111100';
            break;
          case 4:
            encryptedString += '0000111110';
            break;
        }
        break;
      case 'f':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111111011';
            break;
          case 2:
            encryptedString += '0011111100';
            break;
          case 3:
            encryptedString += '0001111110';
            break;
          case 4:
            encryptedString += '0000111111';
            break;
        }
        break;
      case 'g':
        switch (ranNum()) {
          case 1:
            encryptedString += '0101000010';
            break;
          case 2:
            encryptedString += '0010100000';
            break;
          case 3:
            encryptedString += '0001010000';
            break;
          case 4:
            encryptedString += '0000101000';
            break;
        }
        break;
      case 'h':
        switch (ranNum()) {
          case 1:
            encryptedString += '0101100010';
            break;
          case 2:
            encryptedString += '0010110000';
            break;
          case 3:
            encryptedString += '0001011000';
            break;
          case 4:
            encryptedString += '0000101100';
            break;
        }
        break;
      case 'i':
        switch (ranNum()) {
          case 1:
            encryptedString += '0101110010';
            break;
          case 2:
            encryptedString += '0010111000';
            break;
          case 3:
            encryptedString += '0001011100';
            break;
          case 4:
            encryptedString += '0000101110';
            break;
        }
        break;
      case 'j':
        switch (ranNum()) {
          case 1:
            encryptedString += '0101111010';
            break;
          case 2:
            encryptedString += '0010111100';
            break;
          case 3:
            encryptedString += '0001011110';
            break;
          case 4:
            encryptedString += '0000101111';
            break;
        }
        break;
      case '`':
        switch (ranNum()) {
          case 1:
            encryptedString += '0';
            break;
          case 2:
            encryptedString += '00';
            break;
          case 3:
            encryptedString += '000';
            break;
          case 4:
            encryptedString += '0000';
            break;
        }
        break;
    }
  }

  console.log(encryptedString);
};

const decrypt = () => {};

module.exports = () => {
  encrypt();
};
