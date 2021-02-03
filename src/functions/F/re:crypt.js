let encryptedString = '';
let decryptedString = '';

const ranNum = () => {
  const number = Math.floor(Math.random() * 4) + 1;
  return number;
};
const encrypt = () => {
  const string =
    '*login*name:hiraeth,password:password,&*stats*str:15,dex:3,vit:4,def:4,agi:3,arc:4,pie:1,&';

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
            encryptedString += '0000001010';
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
      case 'n':
        switch (ranNum()) {
          case 1:
            encryptedString += '0001101010';
            break;
          case 2:
            encryptedString += '0100110010';
            break;
          case 3:
            encryptedString += '0100011010';
            break;
          case 4:
            encryptedString += '0101001100';
            break;
        }
        break;
      case 'o':
        switch (ranNum()) {
          case 1:
            encryptedString += '0001111010';
            break;
          case 2:
            encryptedString += '0100111010';
            break;
          case 3:
            encryptedString += '0100011110';
            break;
          case 4:
            encryptedString += '0101001110';
            break;
        }
        break;
      case 'p':
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
      case 'q':
        switch (ranNum()) {
          case 1:
            encryptedString += '0000111010';
            break;
          case 2:
            encryptedString += '0100011010';
            break;
          case 3:
            encryptedString += '0100001110';
            break;
          case 4:
            encryptedString += '0101000110';
            break;
        }
        break;
      case 'r':
        switch (ranNum()) {
          case 1:
            encryptedString += '0000011010';
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
      case 's':
        switch (ranNum()) {
          case 1:
            encryptedString += '1100000101';
            break;
          case 2:
            encryptedString += '1010000101';
            break;
          case 3:
            encryptedString += '1011000001';
            break;
          case 4:
            encryptedString += '1010100001';
            break;
        }
        break;
      case 't':
        switch (ranNum()) {
          case 1:
            encryptedString += '1110000101';
            break;
          case 2:
            encryptedString += '1011000101';
            break;
          case 3:
            encryptedString += '1011100001';
            break;
          case 4:
            encryptedString += '1010110001';
            break;
        }
        break;
      case 'u':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111000101';
            break;
          case 2:
            encryptedString += '1011100101';
            break;
          case 3:
            encryptedString += '1011110001';
            break;
          case 4:
            encryptedString += '1010111001';
            break;
        }
        break;
      case 'v':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111100101';
            break;
          case 2:
            encryptedString += '1011110101';
            break;
          case 3:
            encryptedString += '1011111001';
            break;
          case 4:
            encryptedString += '1010111101';
            break;
        }
        break;
      case 'x':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111110101';
            break;
          case 2:
            encryptedString += '1011111101';
            break;
          case 3:
            encryptedString += '1011111101';
            break;
          case 4:
            encryptedString += '1010111111';
            break;
        }
        break;
      case 'y':
        switch (ranNum()) {
          case 1:
            encryptedString += '1101110101';
            break;
          case 2:
            encryptedString += '1010111101';
            break;
          case 3:
            encryptedString += '1011011101';
            break;
          case 4:
            encryptedString += '1010101111';
            break;
        }
        break;
      case 'z':
        switch (ranNum()) {
          case 1:
            encryptedString += '1110110101';
            break;
          case 2:
            encryptedString += '1011011101';
            break;
          case 3:
            encryptedString += '1011101101';
            break;
          case 4:
            encryptedString += '1010110111';
            break;
        }
        break;
      case '*':
        switch (ranNum()) {
          case 1:
            encryptedString += '1010000101';
            break;
          case 2:
            encryptedString += '1001000101';
            break;
          case 3:
            encryptedString += '1010100001';
            break;
          case 4:
            encryptedString += '1010010001';
            break;
        }
        break;
      case ':':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011000101';
            break;
          case 2:
            encryptedString += '1001100101';
            break;
          case 3:
            encryptedString += '1010110001';
            break;
          case 4:
            encryptedString += '1010011001';
            break;
        }
        break;
      case ',':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011100101';
            break;
          case 2:
            encryptedString += '1001110101';
            break;
          case 3:
            encryptedString += '1010111001';
            break;
          case 4:
            encryptedString += '1010011101';
            break;
        }
        break;
      case '&':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011110101';
            break;
          case 2:
            encryptedString += '1001111101';
            break;
          case 3:
            encryptedString += '1010111101';
            break;
          case 4:
            encryptedString += '1010011111';
            break;
        }
        break;
      case '`':
        switch (ranNum()) {
          case 1:
            encryptedString += '1 0101';
            break;
          case 2:
            encryptedString += '10 101';
            break;
          case 3:
            encryptedString += '101 01';
            break;
          case 4:
            encryptedString += '1010 1';
            break;
        }
        break;
    }
  }

  console.log(encryptedString);
  decrypt();
};

const decrypt = () => {
  const encryptionBlock = [];
  let encryptionBlockItemHolder = '';
  let encryptionBlockVerification = 0;

  for (let i = 0; i < encryptedString.length; i++) {
    encryptionBlockVerification++;
    encryptionBlockItemHolder += encryptedString[i];
    if (encryptionBlockVerification === 10) {
      encryptionBlock.push(encryptionBlockItemHolder);
      encryptionBlockItemHolder = '';
      encryptionBlockVerification = 0;
    }
  }

  for (let i = 0; i < encryptionBlock.length; i++) {
    console.log(encryptionBlock[i]);

    if (
      encryptionBlock[i] === '0100001010' ||
      encryptionBlock[i] === '0110000010' ||
      encryptionBlock[i] === '0101000010' ||
      encryptionBlock[i] === '0101100000'
    ) {
      decryptedString += 'a';
    } else if (
      encryptionBlock[i] === '0010001010' ||
      encryptionBlock[i] === '0101000010' ||
      encryptionBlock[i] === '0100100010' ||
      encryptionBlock[i] === '0101010000'
    ) {
      decryptedString += 'b';
    } else if (
      encryptionBlock[i] === '0001001010' ||
      encryptionBlock[i] === '0100100010' ||
      encryptionBlock[i] === '0100010010' ||
      encryptionBlock[i] === '0101001000'
    ) {
      decryptedString += 'c';
    } else if (
      encryptionBlock[i] === '0000101010' ||
      encryptionBlock[i] === '0100010010' ||
      encryptionBlock[i] === '0100001010' ||
      encryptionBlock[i] === '0101000100'
    ) {
      decryptedString += 'd';
    } else if (
      encryptionBlock[i] === '0000001010' ||
      encryptionBlock[i] === '0100001010' ||
      encryptionBlock[i] === '0100000110' ||
      encryptionBlock[i] === '0101000010'
    ) {
      decryptedString += 'e';
    }

    switch (encryptionBlock[i]) {
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
      case 'n':
        switch (ranNum()) {
          case 1:
            encryptedString += '0001101010';
            break;
          case 2:
            encryptedString += '0100110010';
            break;
          case 3:
            encryptedString += '0100011010';
            break;
          case 4:
            encryptedString += '0101001100';
            break;
        }
        break;
      case 'o':
        switch (ranNum()) {
          case 1:
            encryptedString += '0001111010';
            break;
          case 2:
            encryptedString += '0100111010';
            break;
          case 3:
            encryptedString += '0100011110';
            break;
          case 4:
            encryptedString += '0101001110';
            break;
        }
        break;
      case 'p':
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
      case 'q':
        switch (ranNum()) {
          case 1:
            encryptedString += '0000111010';
            break;
          case 2:
            encryptedString += '0100011010';
            break;
          case 3:
            encryptedString += '0100001110';
            break;
          case 4:
            encryptedString += '0101000110';
            break;
        }
        break;
      case 'r':
        switch (ranNum()) {
          case 1:
            encryptedString += '0000011010';
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
      case 's':
        switch (ranNum()) {
          case 1:
            encryptedString += '1100000101';
            break;
          case 2:
            encryptedString += '1010000101';
            break;
          case 3:
            encryptedString += '1011000001';
            break;
          case 4:
            encryptedString += '1010100001';
            break;
        }
        break;
      case 't':
        switch (ranNum()) {
          case 1:
            encryptedString += '1110000101';
            break;
          case 2:
            encryptedString += '1011000101';
            break;
          case 3:
            encryptedString += '1011100001';
            break;
          case 4:
            encryptedString += '1010110001';
            break;
        }
        break;
      case 'u':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111000101';
            break;
          case 2:
            encryptedString += '1011100101';
            break;
          case 3:
            encryptedString += '1011110001';
            break;
          case 4:
            encryptedString += '1010111001';
            break;
        }
        break;
      case 'v':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111100101';
            break;
          case 2:
            encryptedString += '1011110101';
            break;
          case 3:
            encryptedString += '1011111001';
            break;
          case 4:
            encryptedString += '1010111101';
            break;
        }
        break;
      case 'x':
        switch (ranNum()) {
          case 1:
            encryptedString += '1111110101';
            break;
          case 2:
            encryptedString += '1011111101';
            break;
          case 3:
            encryptedString += '1011111101';
            break;
          case 4:
            encryptedString += '1010111111';
            break;
        }
        break;
      case 'y':
        switch (ranNum()) {
          case 1:
            encryptedString += '1101110101';
            break;
          case 2:
            encryptedString += '1010111101';
            break;
          case 3:
            encryptedString += '1011011101';
            break;
          case 4:
            encryptedString += '1010101111';
            break;
        }
        break;
      case 'z':
        switch (ranNum()) {
          case 1:
            encryptedString += '1110110101';
            break;
          case 2:
            encryptedString += '1011011101';
            break;
          case 3:
            encryptedString += '1011101101';
            break;
          case 4:
            encryptedString += '1010110111';
            break;
        }
        break;
      case '*':
        switch (ranNum()) {
          case 1:
            encryptedString += '1010000101';
            break;
          case 2:
            encryptedString += '1001000101';
            break;
          case 3:
            encryptedString += '1010100001';
            break;
          case 4:
            encryptedString += '1010010001';
            break;
        }
        break;
      case ':':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011000101';
            break;
          case 2:
            encryptedString += '1001100101';
            break;
          case 3:
            encryptedString += '1010110001';
            break;
          case 4:
            encryptedString += '1010011001';
            break;
        }
        break;
      case ',':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011100101';
            break;
          case 2:
            encryptedString += '1001110101';
            break;
          case 3:
            encryptedString += '1010111001';
            break;
          case 4:
            encryptedString += '1010011101';
            break;
        }
        break;
      case '&':
        switch (ranNum()) {
          case 1:
            encryptedString += '1011110101';
            break;
          case 2:
            encryptedString += '1001111101';
            break;
          case 3:
            encryptedString += '1010111101';
            break;
          case 4:
            encryptedString += '1010011111';
            break;
        }
        break;
      case '`':
        switch (ranNum()) {
          case 1:
            encryptedString += '1 0101';
            break;
          case 2:
            encryptedString += '10 101';
            break;
          case 3:
            encryptedString += '101 01';
            break;
          case 4:
            encryptedString += '1010 1';
            break;
        }
        break;
    }
  }
  console.log(decryptedString);
};

module.exports = () => {
  encrypt();
};
