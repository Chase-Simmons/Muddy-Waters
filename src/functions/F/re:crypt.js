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
            encryptedString += '0100001010';
            break;
          case 2:
            encryptedString += '0110000010';
            break;
          case 3:
            encryptedString += '0101000010';
            break;
          case 4:
            encryptedString += '0101100000';
            break;
        }
        break;
      case 'b':
        switch (ranNum()) {
          case 1:
            encryptedString += '0010001010';
            break;
          case 2:
            encryptedString += '0101000010';
            break;
          case 3:
            encryptedString += '0100100010';
            break;
          case 4:
            encryptedString += '0101010000';
            break;
        }
        break;
      case 'c':
        switch (ranNum()) {
          case 1:
            encryptedString += '0001001010';
            break;
          case 2:
            encryptedString += '0100100010';
            break;
          case 3:
            encryptedString += '0100010010';
            break;
          case 4:
            encryptedString += '0101001000';
            break;
        }
        break;
      case 'd':
        switch (ranNum()) {
          case 1:
            encryptedString += '0000101010';
            break;
          case 2:
            encryptedString += '0100010010';
            break;
          case 3:
            encryptedString += '0100001010';
            break;
          case 4:
            encryptedString += '0101000100';
            break;
        }
        break;
      case 'e':
        switch (ranNum()) {
          case 1:
            encryptedString += '000001010';
            break;
          case 2:
            encryptedString += '0100001010';
            break;
          case 3:
            encryptedString += '0100000110';
            break;
          case 4:
            encryptedString += '0101000010';
            break;
        }
        break;
      case 'f':
        switch (ranNum()) {
          case 1:
            encryptedString += '0110001010';
            break;
          case 2:
            encryptedString += '0111000010';
            break;
          case 3:
            encryptedString += '0101100010';
            break;
          case 4:
            encryptedString += '0101110000';
            break;
        }
        break;
      case 'g':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111001010';
            break;
          case 2:
            encryptedString += '0111100010';
            break;
          case 3:
            encryptedString += '0101110010';
            break;
          case 4:
            encryptedString += '0101111000';
            break;
        }
        break;
      case 'h':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111101010';
            break;
          case 2:
            encryptedString += '0111110010';
            break;
          case 3:
            encryptedString += '0101111010';
            break;
          case 4:
            encryptedString += '0101111100';
            break;
        }
        break;
      case 'i':
        switch (ranNum()) {
          case 1:
            encryptedString += '0111111010';
            break;
          case 2:
            encryptedString += '0111111010';
            break;
          case 3:
            encryptedString += '0101111110';
            break;
          case 4:
            encryptedString += '0101111110';
            break;
        }
        break;
      case 'j':
        switch (ranNum()) {
          case 1:
            encryptedString += '0011001010';
            break;
          case 2:
            encryptedString += '0101100010';
            break;
          case 3:
            encryptedString += '0100110010';
            break;
          case 4:
            encryptedString += '0101011000';
            break;
        }
        break;
      case 'k':
        switch (ranNum()) {
          case 1:
            encryptedString += '0011101010';
            break;
          case 2:
            encryptedString += '0101110010';
            break;
          case 3:
            encryptedString += '0100111010';
            break;
          case 4:
            encryptedString += '0101011100';
            break;
        }
        break;
      case 'l':
        switch (ranNum()) {
          case 1:
            encryptedString += '0011111010';
            break;
          case 2:
            encryptedString += '0101111010';
            break;
          case 3:
            encryptedString += '0100111110';
            break;
          case 4:
            encryptedString += '0101011110';
            break;
        }
        break;
      case 'm':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'n':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'o':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'p':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'q':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'r':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 's':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 't':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'u':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'v':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'x':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'y':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
            break;
        }
        break;
      case 'z':
        switch (ranNum()) {
          case 1:
            encryptedString += '0 1010';
            break;
          case 2:
            encryptedString += '01 010';
            break;
          case 3:
            encryptedString += '010 10';
            break;
          case 4:
            encryptedString += '0101 0';
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
