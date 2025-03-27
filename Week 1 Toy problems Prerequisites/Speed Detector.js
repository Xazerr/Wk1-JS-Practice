function speedDetector() {
  const speed = prompt("Enter car speed:");
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  const speedNum = parseInt(speed);
  
  if (isNaN(speedNum)) {  
    return "Invalid input! Please enter a number.";
  }
  
  if (speedNum < speedLimit) {
    return "Ok";
  } else {
    const points = Math.floor((speedNum - speedLimit) / kmPerPoint);
    
    if (points > 12) {
      return "License suspended";
    } else {
      return `Points: ${points}`;
    }
  }
}

console.log(speedDetector());