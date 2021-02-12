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

const l1 = '0011111010';
const l2 = '0011111010';
const l3 = '0011111010';
const l4 = '0011111010';

const m1 = '0001001011';
const m2 = '0001001011';
const m3 = '0001001011';
const m4 = '0001001011';

const n1 = '0001101010';
const n2 = '0001101010';
const n3 = '0001101010';
const n4 = '0001101010';

const o1 = '0001111010';
const o2 = '0001111010';
const o3 = '0001111010';
const o4 = '0001111010';

const p1 = '0000101011';
const p2 = '0000101011';
const p3 = '0000101011';
const p4 = '0000101011';

const q1 = '0000111010';
const q2 = '0000111010';
const q3 = '0000111010';
const q4 = '0000111010';

const r1 = '0000011010';
const r2 = '0000011010';
const r3 = '0000011010';
const r4 = '0000011010';

const s1 = '1100000101';
const s2 = '1100000101';
const s3 = '1100000101';
const s4 = '1100000101';

const t1 = '1110000101';
const t2 = '1110000101';
const t3 = '1110000101';
const t4 = '1110000101';

const u1 = '1111000101';
const u2 = '1111000101';
const u3 = '1111000101';
const u4 = '1111000101';

const v1 = '1111100101';
const v2 = '1111100101';
const v3 = '1111100101';
const v4 = '1111100101';

const w1 = '1010100101';
const w2 = '1010100101';
const w3 = '1010100101';
const w4 = '1010100101';

const x1 = '1111110101';
const x2 = '1111110101';
const x3 = '1111110101';
const x4 = '1111110101';

const y1 = '1101110101';
const y2 = '1101110101';
const y3 = '1101110101';
const y4 = '1101110101';

const z1 = '1110110101';
const z2 = '1110110101';
const z3 = '1110110101';
const z4 = '1110110101';

const zero1 = '0010010010';
const zero2 = '0010010010';
const zero3 = '0010010010';
const zero4 = '0010010010';

const one1 = '0010010011';
const one2 = '0010010011';
const one3 = '0010010011';
const one4 = '0010010011';

const two1 = '0010010111';
const two2 = '0010010111';
const two3 = '0010010111';
const two4 = '0010010111';

const three1 = '0010011111';
const three2 = '0010011111';
const three3 = '0010011111';
const three4 = '0010011111';

const four1 = '0010111111';
const four2 = '0010111111';
const four3 = '0010111111';
const four4 = '0010111111';

const five1 = '0011111111';
const five2 = '0011111111';
const five3 = '0011111111';
const five4 = '0011111111';

const six1 = '0011111011';
const six2 = '0011111011';
const six3 = '0011111011';
const six4 = '0011111011';

const seven1 = '0011101011';
const seven2 = '0011101011';
const seven3 = '0011101011';
const seven4 = '0011101011';

const eight1 = '0011101111';
const eight2 = '0011101111';
const eight3 = '0011101111';
const eight4 = '0011101111';

const nine1 = '0011101101';
const nine2 = '0011101101';
const nine3 = '0011101101';
const nine4 = '0011101101';

const splat1 = '1010000101';
const splat2 = '1010000101';
const splat3 = '1010000101';
const splat4 = '1010000101';

const colon1 = '1011000101';
const colon2 = '1011000101';
const colon3 = '1011000101';
const colon4 = '1011000101';

const comma1 = '1011100101';
const comma2 = '1011100101';
const comma3 = '1011100101';
const comma4 = '1011100101';

const ampersand1 = '1011110101';
const ampersand2 = '1011110101';
const ampersand3 = '1011110101';
const ampersand4 = '1011110101';

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
            encryptedString += l1;
            break;
          case 2:
            encryptedString += l2;
            break;
          case 3:
            encryptedString += l3;
            break;
          case 4:
            encryptedString += l4;
            break;
        }
        break;
      case 'm':
        switch (ranNum()) {
          case 1:
            encryptedString += m1;
            break;
          case 2:
            encryptedString += m2;
            break;
          case 3:
            encryptedString += m3;
            break;
          case 4:
            encryptedString += m4;
            break;
        }
        break;
      case 'n':
        switch (ranNum()) {
          case 1:
            encryptedString += n1;
            break;
          case 2:
            encryptedString += n2;
            break;
          case 3:
            encryptedString += n3;
            break;
          case 4:
            encryptedString += n4;
            break;
        }
        break;
      case 'o':
        switch (ranNum()) {
          case 1:
            encryptedString += o1;
            break;
          case 2:
            encryptedString += o2;
            break;
          case 3:
            encryptedString += o3;
            break;
          case 4:
            encryptedString += o4;
            break;
        }
        break;
      case 'p':
        switch (ranNum()) {
          case 1:
            encryptedString += p1;
            break;
          case 2:
            encryptedString += p2;
            break;
          case 3:
            encryptedString += p3;
            break;
          case 4:
            encryptedString += p4;
            break;
        }
        break;
      case 'q':
        switch (ranNum()) {
          case 1:
            encryptedString += q1;
            break;
          case 2:
            encryptedString += q2;
            break;
          case 3:
            encryptedString += q3;
            break;
          case 4:
            encryptedString += q4;
            break;
        }
        break;
      case 'r':
        switch (ranNum()) {
          case 1:
            encryptedString += r1;
            break;
          case 2:
            encryptedString += r2;
            break;
          case 3:
            encryptedString += r3;
            break;
          case 4:
            encryptedString += r4;
            break;
        }
        break;
      case 's':
        switch (ranNum()) {
          case 1:
            encryptedString += s1;
            break;
          case 2:
            encryptedString += s2;
            break;
          case 3:
            encryptedString += s3;
            break;
          case 4:
            encryptedString += s4;
            break;
        }
        break;
      case 't':
        switch (ranNum()) {
          case 1:
            encryptedString += t1;
            break;
          case 2:
            encryptedString += t2;
            break;
          case 3:
            encryptedString += t3;
            break;
          case 4:
            encryptedString += t4;
            break;
        }
        break;
      case 'u':
        switch (ranNum()) {
          case 1:
            encryptedString += u1;
            break;
          case 2:
            encryptedString += u2;
            break;
          case 3:
            encryptedString += u3;
            break;
          case 4:
            encryptedString += u4;
            break;
        }
        break;
      case 'v':
        switch (ranNum()) {
          case 1:
            encryptedString += v1;
            break;
          case 2:
            encryptedString += v2;
            break;
          case 3:
            encryptedString += v3;
            break;
          case 4:
            encryptedString += v4;
            break;
        }
        break;

      case 'w':
        switch (ranNum()) {
          case 1:
            encryptedString += w1;
            break;
          case 2:
            encryptedString += w2;
            break;
          case 3:
            encryptedString += w3;
            break;
          case 4:
            encryptedString += w4;
            break;
        }
        break;
      case 'x':
        switch (ranNum()) {
          case 1:
            encryptedString += x1;
            break;
          case 2:
            encryptedString += x2;
            break;
          case 3:
            encryptedString += x3;
            break;
          case 4:
            encryptedString += x4;
            break;
        }
        break;
      case 'y':
        switch (ranNum()) {
          case 1:
            encryptedString += y1;
            break;
          case 2:
            encryptedString += y2;
            break;
          case 3:
            encryptedString += y3;
            break;
          case 4:
            encryptedString += y4;
            break;
        }
        break;
      case 'z':
        switch (ranNum()) {
          case 1:
            encryptedString += z1;
            break;
          case 2:
            encryptedString += z2;
            break;
          case 3:
            encryptedString += z3;
            break;
          case 4:
            encryptedString += z4;
            break;
        }
        break;
      case '0':
        switch (ranNum()) {
          case 1:
            encryptedString += zero1;
            break;
          case 2:
            encryptedString += zero2;
            break;
          case 3:
            encryptedString += zero3;
            break;
          case 4:
            encryptedString += zero4;
            break;
        }
        break;
      case '1':
        switch (ranNum()) {
          case 1:
            encryptedString += one1;
            break;
          case 2:
            encryptedString += one2;
            break;
          case 3:
            encryptedString += one3;
            break;
          case 4:
            encryptedString += one4;
            break;
        }
        break;
      case '2':
        switch (ranNum()) {
          case 1:
            encryptedString += two1;
            break;
          case 2:
            encryptedString += two2;
            break;
          case 3:
            encryptedString += two3;
            break;
          case 4:
            encryptedString += two4;
            break;
        }
        break;
      case '3':
        switch (ranNum()) {
          case 1:
            encryptedString += three1;
            break;
          case 2:
            encryptedString += three2;
            break;
          case 3:
            encryptedString += three3;
            break;
          case 4:
            encryptedString += three4;
            break;
        }
        break;
      case '4':
        switch (ranNum()) {
          case 1:
            encryptedString += four1;
            break;
          case 2:
            encryptedString += four2;
            break;
          case 3:
            encryptedString += four3;
            break;
          case 4:
            encryptedString += four4;
            break;
        }
        break;
      case '5':
        switch (ranNum()) {
          case 1:
            encryptedString += five1;
            break;
          case 2:
            encryptedString += five2;
            break;
          case 3:
            encryptedString += five3;
            break;
          case 4:
            encryptedString += five4;
            break;
        }
        break;
      case '6':
        switch (ranNum()) {
          case 1:
            encryptedString += six1;
            break;
          case 2:
            encryptedString += six2;
            break;
          case 3:
            encryptedString += six3;
            break;
          case 4:
            encryptedString += six4;
            break;
        }
        break;
      case '7':
        switch (ranNum()) {
          case 1:
            encryptedString += seven1;
            break;
          case 2:
            encryptedString += seven2;
            break;
          case 3:
            encryptedString += seven3;
            break;
          case 4:
            encryptedString += seven4;
            break;
        }
        break;
      case '8':
        switch (ranNum()) {
          case 1:
            encryptedString += eight1;
            break;
          case 2:
            encryptedString += eight2;
            break;
          case 3:
            encryptedString += eight3;
            break;
          case 4:
            encryptedString += eight4;
            break;
        }
        break;
      case '9':
        switch (ranNum()) {
          case 1:
            encryptedString += nine1;
            break;
          case 2:
            encryptedString += nine2;
            break;
          case 3:
            encryptedString += nine3;
            break;
          case 4:
            encryptedString += nine4;
            break;
        }
        break;
      case '*':
        switch (ranNum()) {
          case 1:
            encryptedString += splat1;
            break;
          case 2:
            encryptedString += splat2;
            break;
          case 3:
            encryptedString += splat3;
            break;
          case 4:
            encryptedString += splat4;
            break;
        }
        break;
      case ':':
        switch (ranNum()) {
          case 1:
            encryptedString += colon1;
            break;
          case 2:
            encryptedString += colon2;
            break;
          case 3:
            encryptedString += colon3;
            break;
          case 4:
            encryptedString += colon4;
            break;
        }
        break;
      case ',':
        switch (ranNum()) {
          case 1:
            encryptedString += comma1;
            break;
          case 2:
            encryptedString += comma2;
            break;
          case 3:
            encryptedString += comma3;
            break;
          case 4:
            encryptedString += comma4;
            break;
        }
        break;
      case '&':
        switch (ranNum()) {
          case 1:
            encryptedString += ampersand1;
            break;
          case 2:
            encryptedString += ampersand2;
            break;
          case 3:
            encryptedString += ampersand3;
            break;
          case 4:
            encryptedString += ampersand4;
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
      encryptionBlock[i] === l1 ||
      encryptionBlock[i] === l2 ||
      encryptionBlock[i] === l3 ||
      encryptionBlock[i] === l4
    ) {
      decryptedString += 'l';
    } else if (
      encryptionBlock[i] === m1 ||
      encryptionBlock[i] === m2 ||
      encryptionBlock[i] === m3 ||
      encryptionBlock[i] === m4
    ) {
      decryptedString += 'm';
    } else if (
      encryptionBlock[i] === n1 ||
      encryptionBlock[i] === n2 ||
      encryptionBlock[i] === n3 ||
      encryptionBlock[i] === n4
    ) {
      decryptedString += 'n';
    } else if (
      encryptionBlock[i] === o1 ||
      encryptionBlock[i] === o2 ||
      encryptionBlock[i] === o3 ||
      encryptionBlock[i] === o4
    ) {
      decryptedString += 'o';
    } else if (
      encryptionBlock[i] === p1 ||
      encryptionBlock[i] === p2 ||
      encryptionBlock[i] === p3 ||
      encryptionBlock[i] === p4
    ) {
      decryptedString += 'p';
    } else if (
      encryptionBlock[i] === q1 ||
      encryptionBlock[i] === q2 ||
      encryptionBlock[i] === q3 ||
      encryptionBlock[i] === q4
    ) {
      decryptedString += 'q';
    } else if (
      encryptionBlock[i] === r1 ||
      encryptionBlock[i] === r2 ||
      encryptionBlock[i] === r3 ||
      encryptionBlock[i] === r4
    ) {
      decryptedString += 'r';
    } else if (
      encryptionBlock[i] === s1 ||
      encryptionBlock[i] === s2 ||
      encryptionBlock[i] === s3 ||
      encryptionBlock[i] === s4
    ) {
      decryptedString += 's';
    } else if (
      encryptionBlock[i] === t1 ||
      encryptionBlock[i] === t2 ||
      encryptionBlock[i] === t3 ||
      encryptionBlock[i] === t4
    ) {
      decryptedString += 't';
    } else if (
      encryptionBlock[i] === u1 ||
      encryptionBlock[i] === u2 ||
      encryptionBlock[i] === u3 ||
      encryptionBlock[i] === u4
    ) {
      decryptedString += 'u';
    } else if (
      encryptionBlock[i] === v1 ||
      encryptionBlock[i] === v2 ||
      encryptionBlock[i] === v3 ||
      encryptionBlock[i] === v4
    ) {
      decryptedString += 'v';
    } else if (
      encryptionBlock[i] === w1 ||
      encryptionBlock[i] === w2 ||
      encryptionBlock[i] === w3 ||
      encryptionBlock[i] === w4
    ) {
      decryptedString += 'w';
    } else if (
      encryptionBlock[i] === x1 ||
      encryptionBlock[i] === x2 ||
      encryptionBlock[i] === x3 ||
      encryptionBlock[i] === x4
    ) {
      decryptedString += 'x';
    } else if (
      encryptionBlock[i] === y1 ||
      encryptionBlock[i] === y2 ||
      encryptionBlock[i] === y3 ||
      encryptionBlock[i] === y4
    ) {
      decryptedString += 'y';
    } else if (
      encryptionBlock[i] === z1 ||
      encryptionBlock[i] === z2 ||
      encryptionBlock[i] === z3 ||
      encryptionBlock[i] === z4
    ) {
      decryptedString += 'z';
    } else if (
      encryptionBlock[i] === zero1 ||
      encryptionBlock[i] === zero2 ||
      encryptionBlock[i] === zero3 ||
      encryptionBlock[i] === zero4
    ) {
      decryptedString += '0';
    } else if (
      encryptionBlock[i] === one1 ||
      encryptionBlock[i] === one2 ||
      encryptionBlock[i] === one3 ||
      encryptionBlock[i] === one4
    ) {
      decryptedString += '1';
    } else if (
      encryptionBlock[i] === two1 ||
      encryptionBlock[i] === two2 ||
      encryptionBlock[i] === two3 ||
      encryptionBlock[i] === two4
    ) {
      decryptedString += '2';
    } else if (
      encryptionBlock[i] === three1 ||
      encryptionBlock[i] === three2 ||
      encryptionBlock[i] === three3 ||
      encryptionBlock[i] === three4
    ) {
      decryptedString += '3';
    } else if (
      encryptionBlock[i] === four1 ||
      encryptionBlock[i] === four2 ||
      encryptionBlock[i] === four3 ||
      encryptionBlock[i] === four4
    ) {
      decryptedString += '4';
    } else if (
      encryptionBlock[i] === five1 ||
      encryptionBlock[i] === five2 ||
      encryptionBlock[i] === five3 ||
      encryptionBlock[i] === five4
    ) {
      decryptedString += '5';
    } else if (
      encryptionBlock[i] === six1 ||
      encryptionBlock[i] === six2 ||
      encryptionBlock[i] === six3 ||
      encryptionBlock[i] === six3
    ) {
      decryptedString += '6';
    } else if (
      encryptionBlock[i] === seven1 ||
      encryptionBlock[i] === seven2 ||
      encryptionBlock[i] === seven3 ||
      encryptionBlock[i] === seven4
    ) {
      decryptedString += '7';
    } else if (
      encryptionBlock[i] === eight1 ||
      encryptionBlock[i] === eight2 ||
      encryptionBlock[i] === eight3 ||
      encryptionBlock[i] === eight4
    ) {
      decryptedString += '8';
    } else if (
      encryptionBlock[i] === nine1 ||
      encryptionBlock[i] === nine2 ||
      encryptionBlock[i] === nine3 ||
      encryptionBlock[i] === nine4
    ) {
      decryptedString += '9';
    } else if (
      encryptionBlock[i] === splat1 ||
      encryptionBlock[i] === splat2 ||
      encryptionBlock[i] === splat3 ||
      encryptionBlock[i] === splat4
    ) {
      decryptedString += '*';
    } else if (
      encryptionBlock[i] === colon1 ||
      encryptionBlock[i] === colon2 ||
      encryptionBlock[i] === colon3 ||
      encryptionBlock[i] === colon4
    ) {
      decryptedString += ':';
    } else if (
      encryptionBlock[i] === comma1 ||
      encryptionBlock[i] === comma2 ||
      encryptionBlock[i] === comma3 ||
      encryptionBlock[i] === comma4
    ) {
      decryptedString += ',';
    } else if (
      encryptionBlock[i] === ampersand1 ||
      encryptionBlock[i] === ampersand2 ||
      encryptionBlock[i] === ampersand3 ||
      encryptionBlock[i] === ampersand4
    ) {
      decryptedString += '&';
    }
  }
  console.log(decryptedString);
};

module.exports = () => {
  encrypt();
};
