function getGrade(score) {
  if (score < 0 || score > 100) return "Invalid Score"; // Check if score is within 0 - 100

  // Determine grade category
  let gradeCategory;
  if (score === 100) {
    gradeCategory = "A++";
  } else if (score >= 90) {
    gradeCategory = "A";
  } else if (score >= 80) {
    gradeCategory = "B";
  } else if (score >= 70) {
    gradeCategory = "C";
  } else if (score >= 60) {
    gradeCategory = "D";
  } else {
    gradeCategory = "F";
  }

  // Use switch to return the grade
  switch (gradeCategory) {
    case "A++":
      return "A++";
    case "A":
      return "A";
    case "B":
      return "B";
    case "C":
      return "C";
    case "D":
      return "D";
    case "F":
      return "F";
    default:
      return "Invalid Grade";
  }
}

const names = ["Budi", "Andi", "Aray", "Ikal"];

console.log(names[2] + ": " + getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
console.log(getGrade(100));
