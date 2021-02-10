let encryptedString = '';
let decryptedString = '';

const a1 = '0100001010';
const a2 = '0100001010';
const a3 = '0100001010';
const a4 = '0100001010';

const b1 = '0010001010';
const b2 = '0010001010';
const b3 = '0010001010';
const b4 = '0010001010';

const c1 = '0001001010';
const c2 = '0001001010';
const c3 = '0001001010';
const c4 = '0001001010';

const d1 = '0000101010';
const d2 = '0000101010';
const d3 = '0000101010';
const d4 = '0000101010';

const e1 = '0000001010';
const e2 = '0000001010';
const e3 = '0000001010';
const e4 = '0000001010';

const f1 = '0110001010';
const f2 = '0110001010';
const f3 = '0110001010';
const f4 = '0110001010';

const g1 = '0111001010';
const g2 = '0111001010';
const g3 = '0111001010';
const g4 = '0111001010';

const h1 = '0111101010';
const h2 = '0111101010';
const h3 = '0111101010';
const h4 = '0111101010';

const i1 = '0111111010';
const i2 = '0111111010';
const i3 = '0111111010';
const i4 = '0111111010';

const j1 = '0011001010';
const j2 = '0011001010';
const j3 = '0011001010';
const j4 = '0011001010';

const k1 = '0011101010';
const k2 = '0011101010';
const k3 = '0011101010';
const k4 = '0011101010';

const l1 = '';
const l2 = '';
const l3 = '';
const l4 = '';

const m1 = '';
const m2 = '';
const m3 = '';
const m4 = '';

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
            encryptedString += a1;
            break;
          case 2:
            encryptedString += a2;
            break;
          case 3:
            encryptedString += a3;
            break;
          case 4:
            encryptedString += a4;
            break;
        }
        break;
      case 'b':
        switch (ranNum()) {
          case 1:
            encryptedString += b1;
            break;
          case 2:
            encryptedString += b2;
            break;
          case 3:
            encryptedString += b3;
            break;
          case 4:
            encryptedString += b4;
            break;
        }
        break;
      case 'c':
        switch (ranNum()) {
          case 1:
            encryptedString += c1;
            break;
          case 2:
            encryptedString += c2;
            break;
          case 3:
            encryptedString += c3;
            break;
          case 4:
            encryptedString += c4;
            break;
        }
        break;
      case 'd':
        switch (ranNum()) {
          case 1:
            encryptedString += d1;
            break;
          case 2:
            encryptedString += d2;
            break;
          case 3:
            encryptedString += d3;
            break;
          case 4:
            encryptedString += d4;
            break;
        }
        break;
      case 'e':
        switch (ranNum()) {
          case 1:
            encryptedString += e1;
            break;
          case 2:
            encryptedString += e2;
            break;
          case 3:
            encryptedString += e3;
            break;
          case 4:
            encryptedString += e4;
            break;
        }
        break;
      case 'f':
        switch (ranNum()) {
          case 1:
            encryptedString += f1;
            break;
          case 2:
            encryptedString += f2;
            break;
          case 3:
            encryptedString += f3;
            break;
          case 4:
            encryptedString += f4;
            break;
        }
        break;
      case 'g':
        switch (ranNum()) {
          case 1:
            encryptedString += g1;
            break;
          case 2:
            encryptedString += g2;
            break;
          case 3:
            encryptedString += g3;
            break;
          case 4:
            encryptedString += g4;
            break;
        }
        break;
      case 'h':
        switch (ranNum()) {
          case 1:
            encryptedString += h1;
            break;
          case 2:
            encryptedString += h2;
            break;
          case 3:
            encryptedString += h3;
            break;
          case 4:
            encryptedString += h4;
            break;
        }
        break;
      case 'i':
        switch (ranNum()) {
          case 1:
            encryptedString += i1;
            break;
          case 2:
            encryptedString += i2;
            break;
          case 3:
            encryptedString += i3;
            break;
          case 4:
            encryptedString += i4;
            break;
        }
        break;
      case 'j':
        switch (ranNum()) {
          case 1:
            encryptedString += j1;
            break;
          case 2:
            encryptedString += j2;
            break;
          case 3:
            encryptedString += j3;
            break;
          case 4:
            encryptedString += j4;
            break;
        }
        break;
      case 'k':
        switch (ranNum()) {
          case 1:
            encryptedString += k1;
            break;
          case 2:
            encryptedString += k2;
            break;
          case 3:
            encryptedString += k3;
            break;
          case 4:
            encryptedString += k4;
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
            encryptedString += '0001001011';
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
            encryptedString += '0000101011';
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
      encryptionBlock[i] === a1 ||
      encryptionBlock[i] === a2 ||
      encryptionBlock[i] === a3 ||
      encryptionBlock[i] === a4
    ) {
      decryptedString += 'a';
    } else if (
      encryptionBlock[i] === b1 ||
      encryptionBlock[i] === b2 ||
      encryptionBlock[i] === b3 ||
      encryptionBlock[i] === b4
    ) {
      decryptedString += 'b';
    } else if (
      encryptionBlock[i] === c1 ||
      encryptionBlock[i] === c2 ||
      encryptionBlock[i] === c3 ||
      encryptionBlock[i] === c4
    ) {
      decryptedString += 'c';
    } else if (
      encryptionBlock[i] === d1 ||
      encryptionBlock[i] === d2 ||
      encryptionBlock[i] === d3 ||
      encryptionBlock[i] === d4
    ) {
      decryptedString += 'd';
    } else if (
      encryptionBlock[i] === e1 ||
      encryptionBlock[i] === e2 ||
      encryptionBlock[i] === e3 ||
      encryptionBlock[i] === e4
    ) {
      decryptedString += 'e';
    } else if (
      encryptionBlock[i] === f1 ||
      encryptionBlock[i] === f2 ||
      encryptionBlock[i] === f3 ||
      encryptionBlock[i] === f4
    ) {
      decryptedString += 'f';
    } else if (
      encryptionBlock[i] === g1 ||
      encryptionBlock[i] === g2 ||
      encryptionBlock[i] === g3 ||
      encryptionBlock[i] === g4
    ) {
      decryptedString += 'g';
    } else if (
      encryptionBlock[i] === h1 ||
      encryptionBlock[i] === h2 ||
      encryptionBlock[i] === h3 ||
      encryptionBlock[i] === h4
    ) {
      decryptedString += 'h';
    } else if (
      encryptionBlock[i] === i1 ||
      encryptionBlock[i] === i2 ||
      encryptionBlock[i] === i3 ||
      encryptionBlock[i] === i4
    ) {
      decryptedString += 'i';
    } else if (
      encryptionBlock[i] === j1 ||
      encryptionBlock[i] === j2 ||
      encryptionBlock[i] === j3 ||
      encryptionBlock[i] === j4
    ) {
      decryptedString += 'j';
    } else if (
      encryptionBlock[i] === k1 ||
      encryptionBlock[i] === k2 ||
      encryptionBlock[i] === k3 ||
      encryptionBlock[i] === k4
    ) {
      decryptedString += 'k';
    } else if (
      encryptionBlock[i] === '0011111010' ||
      encryptionBlock[i] === '0101111010' ||
      encryptionBlock[i] === '0100111110' ||
      encryptionBlock[i] === '0101011110'
    ) {
      decryptedString += 'l';
    } else if (
      encryptionBlock[i] === '0001001010' ||
      encryptionBlock[i] === '0100100010' ||
      encryptionBlock[i] === '0100010010' ||
      encryptionBlock[i] === '0101001000'
    ) {
      decryptedString += 'm';
    } else if (
      encryptionBlock[i] === '0001101010' ||
      encryptionBlock[i] === '0100110010' ||
      encryptionBlock[i] === '0100011010' ||
      encryptionBlock[i] === '0101001100'
    ) {
      decryptedString += 'n';
    } else if (
      encryptionBlock[i] === '0001111010' ||
      encryptionBlock[i] === '0100111010' ||
      encryptionBlock[i] === '0100011110' ||
      encryptionBlock[i] === '0101001110'
    ) {
      decryptedString += 'o';
    } else if (
      encryptionBlock[i] === '0000101010' ||
      encryptionBlock[i] === '0100010010' ||
      encryptionBlock[i] === '0100001010' ||
      encryptionBlock[i] === '0101000100'
    ) {
      decryptedString += 'p';
    } else if (
      encryptionBlock[i] === '0000111010' ||
      encryptionBlock[i] === '0100011010' ||
      encryptionBlock[i] === '0100001110' ||
      encryptionBlock[i] === '0101000110'
    ) {
      decryptedString += 'q';
    } else if (
      encryptionBlock[i] === '0000011010' ||
      encryptionBlock[i] === '0100001010' ||
      encryptionBlock[i] === '0100000110' ||
      encryptionBlock[i] === '0101000010'
    ) {
      decryptedString += 'r';
    } else if (
      encryptionBlock[i] === '1100000101' ||
      encryptionBlock[i] === '1010000101' ||
      encryptionBlock[i] === '1011000001' ||
      encryptionBlock[i] === '1010100001'
    ) {
      decryptedString += 's';
    } else if (
      encryptionBlock[i] === '1110000101' ||
      encryptionBlock[i] === '1011000101' ||
      encryptionBlock[i] === '1011100001' ||
      encryptionBlock[i] === '1010110001'
    ) {
      decryptedString += 't';
    } else if (
      encryptionBlock[i] === '1111000101' ||
      encryptionBlock[i] === '1011100101' ||
      encryptionBlock[i] === '1011110001' ||
      encryptionBlock[i] === '1010111001'
    ) {
      decryptedString += 'u';
    } else if (
      encryptionBlock[i] === '1111100101' ||
      encryptionBlock[i] === '1011110101' ||
      encryptionBlock[i] === '1011111001' ||
      encryptionBlock[i] === '1010111101'
    ) {
      decryptedString += 'v';
    } else if (
      encryptionBlock[i] === '1111110101' ||
      encryptionBlock[i] === '1011111101' ||
      encryptionBlock[i] === '1011111101' ||
      encryptionBlock[i] === '1010111111'
    ) {
      decryptedString += 'x';
    } else if (
      encryptionBlock[i] === '1101110101' ||
      encryptionBlock[i] === '1010111101' ||
      encryptionBlock[i] === '1011011101' ||
      encryptionBlock[i] === '1010101111'
    ) {
      decryptedString += 'y';
    } else if (
      encryptionBlock[i] === '1110110101' ||
      encryptionBlock[i] === '1011011101' ||
      encryptionBlock[i] === '1011101101' ||
      encryptionBlock[i] === '1010110111'
    ) {
      decryptedString += 'z';
    } else if (
      encryptionBlock[i] === '1010000101' ||
      encryptionBlock[i] === '1001000101' ||
      encryptionBlock[i] === '1010100001' ||
      encryptionBlock[i] === '1010010001'
    ) {
      decryptedString += '*';
    } else if (
      encryptionBlock[i] === '1011000101' ||
      encryptionBlock[i] === '1001100101' ||
      encryptionBlock[i] === '1010110001' ||
      encryptionBlock[i] === '1010011001'
    ) {
      decryptedString += ':';
    } else if (
      encryptionBlock[i] === '1011100101' ||
      encryptionBlock[i] === '1001110101' ||
      encryptionBlock[i] === '1010111001' ||
      encryptionBlock[i] === '1010011101'
    ) {
      decryptedString += ',';
    } else if (
      encryptionBlock[i] === '1011110101' ||
      encryptionBlock[i] === '1001111101' ||
      encryptionBlock[i] === '1010111101' ||
      encryptionBlock[i] === '1010011111'
    ) {
      decryptedString += '&';
    }
  }
  console.log(decryptedString);
};

module.exports = () => {
  encrypt();
};
