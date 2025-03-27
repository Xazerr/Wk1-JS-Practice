function studentGradeGenerator() {
  let marks = prompt("Enter student marks (0-100):");
  
  // Converts the input to number
  marks = parseFloat(marks);

  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input! Marks should be between 0 and 100.";
  }

  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {  
    grade = "B";
  } else if (marks >= 50) {  
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  return `Grade: ${grade}`;
}

// Test
console.log(studentGradeGenerator());