/* This is a geometric progession based program. Javascript numbers are divided into two
Number type and bigInt type. The number type can hold up to 2^53 integers.
Our program exceeds that rainge so we make use of the BigInt number type
to store integers beyond the safe integer limits of the number type*/
const square = (pow) => {
  if (pow < 1 || pow > 64) throw ('square must be between 1 and 64')
  return 2n ** BigInt(pow-1);
};

const total = () => {
  return 2n ** 64n - 1n;
};


module.exports = {square, total}
