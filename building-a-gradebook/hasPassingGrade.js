function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  function studentMsg(totalScores, studentScore) {
    const classAverage = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    // Determine if the student passed or failed using if-else
      let result;
      if (studentGrade === 'A++' ||studentGrade === 'A' || studentGrade === 'B' || studentGrade === 'C' || studentGrade === 'D') {
          result = 'You passed the course.';
      } else {
          result = 'You failed the course.';
      }
      // Build the message
      return 'Class average: ' + classAverage + '. Your grade: ' + studentGrade + '. ' + result;
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));