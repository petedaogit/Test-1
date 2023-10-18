function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function sumofPrimewithin(a, b) {
  if (a >= b) {
    throw new Error("a must be less than b.");
  }
  const primeNumbers = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers.reduce((sum, number) => sum + number, 0);
}
function sumPrimes() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  try {
    const sum = sumofPrimewithin(a, b);
    document.getElementById(
      "result"
    ).innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là ${sum}.`;
  } catch (error) {
    document.getElementById("result").innerHTML = error.message;
  }
}
