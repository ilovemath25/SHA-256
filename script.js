const k = [
   "01000010100010100010111110011000", // K[0]
   "01110001001101110100010010010001", // K[1]
   "10110101110000001111101111001111", // K[2]
   "11101001101101011101101110100101", // K[3]
   "00111001010101101100001001011011", // K[4]
   "01011001111100010001000111110001", // K[5]
   "10010010001111111000001010100100", // K[6]
   "10101011000111000101111011010101", // K[7]
   "11011000000001111010101010011000", // K[8]
   "00010010100000110101101100000001", // K[9]
   "00100100001100011000010110111110", // K[10]
   "01010101000011000111110111000011", // K[11]
   "01110010101111100101110101110100", // K[12]
   "10000000110111101011000111111110", // K[13]
   "10011011110111000000011010100111", // K[14]
   "11000001100110111111000101110100", // K[15]
   "11100100100110110110100111000001", // K[16]
   "11101111101111100100011110000110", // K[17]
   "00001111110000011001110111000110", // K[18]
   "00100100000011001010000111001100", // K[19]
   "00101101111010010010110001101111", // K[20]
   "01001010011101001000010010101010", // K[21]
   "01011100101100001010100111011100", // K[22]
   "01110110111110011000100011011010", // K[23]
   "10011000001111100101000101010010", // K[24]
   "10101000001100011100011001101101", // K[25]
   "10110000000000110010011111001000", // K[26]
   "10111111010110010111111111000111", // K[27]
   "11000110111000000000101111110011", // K[28]
   "11010101101001111001000101000111", // K[29]
   "00000110110010100110001101010001", // K[30]
   "00010100001010010010100101100111", // K[31]
   "00100111101101110000101010000101", // K[32]
   "00101110000110110010000100111000", // K[33]
   "01001101001011000110110111111100", // K[34]
   "01010011001110000000110100010011", // K[35]
   "01100101000010100111001101010100", // K[36]
   "01110110011010100000101010111011", // K[37]
   "10000001110000101100100100101110", // K[38]
   "10010010011100100010110010000101", // K[39]
   "10100010101111111110100010100001", // K[40]
   "10101000000110100110011001001011", // K[41]
   "11000010010010111000101101110000", // K[42]
   "11000111011011000101000110100011", // K[43]
   "11010001100100101110100000011001", // K[44]
   "11010110100110010000011000100100", // K[45]
   "11110100000011100011010110000101", // K[46]
   "00010000011010101010000001110000", // K[47]
   "00011001101001001100000100010110", // K[48]
   "00011110001101110110110000001000", // K[49]
   "00100111010010000111011101001100", // K[50]
   "00110100101100001011110010110101", // K[51]
   "00111001000111000000110010110011", // K[52]
   "01001110110110001010101001001010", // K[53]
   "01011011100111001100101001001111", // K[54]
   "01101000001011100110111111110011", // K[55]
   "01110100100011111000001011101110", // K[56]
   "01111000101001010110001101101111", // K[57]
   "10000100110010000111100000010100", // K[58]
   "10001100110001110000001000001000", // K[59]
   "10010000101111101111111111111010", // K[60]
   "10100100010100000110110011101011", // K[61]
   "10111110111110011010001111110111", // K[62]
   "11000110011100010111100011110010"  // K[63]
];
function RotR(data, n){
   n %= data.length;
   return data.slice(-n) + data.slice(0, -n);
}
function ShR(data, n){
   return '0'.repeat(n) + data.slice(0, -n);
}
function and(data1, data2){
   let result = "";
   for (let i = 0; i < data1.length; i++) result += data1[i]=='0' || data2[i]=='0' ? '0' : '1';
   return result;
}
function or(data1, data2){
   let result = "";
   for (let i = 0; i < data1.length; i++) result += data1[i]=='1' || data2[i]=='1' ? '1' : '0';
   return result;
}
function not(data){
   return data.split('').map(char => char == '0' ? '1' : '0').join('');
}
function xor(...data) {
   let result = data[0];
   for (let i = 1; i < data.length; i++){
      let result_temp = "";
      for (let j = 0; j < result.length; j++) result_temp += result[j] === data[i][j] ? '0' : '1';
      result = result_temp;
   }
   return result;
}
function add(data1, data2){
   let result = "";
   let carry = 0
   for (let i = data1.length-1; i >= 0; i--) {
      const bit1 = parseInt(data1[i], 10);
      const bit2 = parseInt(data2[i], 10);
      const sum = bit1 + bit2 + carry;
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
   }
   return result.slice(-32);
}
function Ch(x, y, z) {
   return xor(and(x, y), and(not(x), z));
}
function Maj(x, y, z) {
   return xor(and(x, y), and(x, z), and(y, z));
}
function E0(x){
   return xor(RotR(x,2), RotR(x,13), RotR(x,22));
}
function E1(x){
   return xor(RotR(x,6), RotR(x,11), RotR(x,25));
}
function o0(x){
   return xor(RotR(x,7), RotR(x,18), ShR(x,3));
}
function o1(x){
   return xor(RotR(x,17), RotR(x,19), ShR(x,10));
}
function bin(data) {
   return String(data).split('')
   .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
}
function pad(data){
   let len = data.length;
   data+='1'
   while ((data.length + 64) % 512 !== 0) data+='0';
   let lengthInBits = len.toString(2).padStart(64, '0');
   return data + lengthInBits;
}
function decompose(data){
   // first 16
   let m = [];
   for (let i = 0; i < data.length; i+=32){
      let w = data.slice(i, i + 32);
      m.push(w);
   }
   // rest 48
   for (let i = 16; i < 64; i++)
      m[i] = add(add(o1(m[i-2]), m[i-7]), add(o0(m[i-15]), m[i-16]));
      console.log()
   return m;
}
function hash(data){
   var H_value = [
      "01101010000010011110011001100111",  // H0
      "10111011011001111010111010000101",  // H1
      "00111100011011101111001101110010",  // H2
      "10100101010011111111010100111010",  // H3
      "01010001000011100101001001111111",  // H4
      "10011011000001010110100010001100",  // H5
      "00011111100000111101100110101011",  // H6
      "01011011111000001100110100011001"   // H7
   ];
   let [a, b, c, d, e, f, g, h] = H_value;
   for (let i = 0; i < 64; i++) {
      let t1 = add(add(add(add(h, E1(e)), Ch(e, f, g)), k[i]), data[i]);
      let t2 = add(E0(a), Maj(a, b, c));
      h = g;
      g = f;
      f = e;
      e = add(d, t1);
      d = c
      c = b;
      b = a;
      a = add(t1, t2);
   }
   H_value[0] = add(H_value[0], a);
   H_value[1] = add(H_value[1], b);
   H_value[2] = add(H_value[2], c);
   H_value[3] = add(H_value[3], d);
   H_value[4] = add(H_value[4], e);
   H_value[5] = add(H_value[5], f);
   H_value[6] = add(H_value[6], g);
   H_value[7] = add(H_value[7], h);
   return H_value.join('');
}
function hex(data){
   let chunks = data.match(/.{1,32}/g);
   return chunks.map(chunk => parseInt(chunk, 2).toString(16).padStart(8, '0')).join('');
}
function sha256(input) {
   // convert input into binary
   let binary = bin(input);
   // padding
   let padding = pad(binary);
   // block decomposition
   let m = decompose(padding);
   // hash computation
   let h = hash(m);
   // convert to hexadecimal
   let result = hex(h);
   return result;
}

function updateOutput() {
   const inputText = document.getElementById('text-input').value;
   const outputBox = document.getElementById('output-box');
   let output = sha256(inputText);

   if (document.querySelector(".func #binary-output").checked) {
      const binaryInput = bin(inputText);
      const padding = pad(binaryInput);
      const m = decompose(padding);
      output = hash(m);
   }

   if (document.querySelector(".func #capital").checked) output = output.toUpperCase();
   else output = output.toLowerCase();

   if (document.querySelector(".func #space-between").checked) output = output.match(/.{1,8}/g).join(' ');
   else output = output.replace(/ /g, "");

   outputBox.value = output;
}

document.getElementById('text-input').addEventListener('input', updateOutput);
document.querySelector(".func #capital").addEventListener('input', updateOutput);
document.querySelector(".func #space-between").addEventListener('input', updateOutput);
document.querySelector(".func #binary-output").addEventListener('input', updateOutput);
