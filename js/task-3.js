// Mission 3 number array filtering
function filterArray(numbers, value) {
  const filteredNumbers = []; // Sonuç dizisi

  // numbers dizisini döngü ile kontrol et
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]); // value'dan büyük sayıları ekle
    }
  }

  return filteredNumbers; // Filtrelenmiş diziyi döndür
}

// Test kodları
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]