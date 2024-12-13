// Initialize counters
let evenCount = 0;

for (let number = 1; number <= 100; number++) {
  if (number % 2 === 0) { // Check if the number is even
    evenCount++;
    console.log(`Even number: ${number}`);
    
    // Every 10th even number
    if (evenCount % 10 === 0) {
      console.log(`Count of evens printed so far: ${evenCount}`);
    }
    
    // Reset the odd counter for the next even number
    
  } else {
    // Increment the count of skipped odd numbers
  }
}