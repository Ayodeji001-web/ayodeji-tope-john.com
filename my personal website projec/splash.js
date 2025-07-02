window.addEventListener ("load", () => { const splash =
  document.getElementById("splash-screen");
  const content = 
  document.getElementById("main-content");

  splash.classList.add("fade-out");

  setTimeout(() => {
    splash.style.display = "none";
    content.style.display = "block";
  }, 3000); 
  //wait for the animation to finish
});


 //simple calculator code//
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operator";
    }
  }

  document.getElementById("result").textContent = result;
}

  //  BMI CALCULATOR
function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for weight and height.";
        return;
    }

    let bmi = weight / (height * height);
    let resultText = `Your BMI is: ${bmi.toFixed(2)}`;
    
    if (bmi < 18.5) {
        resultText += "\nYou are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "\nYou have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "\nYou are overweight.";
    } else {
        resultText += "\nYou are obese.";
    }
    
    document.getElementById('result').innerText = resultText;
}

    // CGPA CALCULATOR //

    const subjectsInput = document.getElementById('subjects');
const gradesContainer = document.getElementById('grades');

// Event listener to show input fields based on the number of subjects
subjectsInput.addEventListener('input', function() {
    const numSubjects = subjectsInput.value;
    gradesContainer.innerHTML = '';  // Clear previous inputs
    
    if (numSubjects > 0) {
        for (let i = 0; i < numSubjects; i++) {
            const label = document.createElement('label');
            label.innerText = `Grade for Subject ${i + 1}: `;
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `grade${i}`;
            input.placeholder = `Enter grade for subject ${i + 1}`;
            input.min = 0;
            input.max = 10;
            input.step = 0.01;
            gradesContainer.appendChild(label);
            gradesContainer.appendChild(input);
            gradesContainer.appendChild(document.createElement('br'));
        }
    }
});

// Function to calculate CGPA
function calculateCGPA() {
    const numSubjects = parseInt(subjectsInput.value);
    let total = 0;
    let validInput = true;

    // Collect all the grades and sum them up
    for (let i = 0; i < numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        
        // Validate grade input
        if (isNaN(grade) || grade < 0 || grade > 10) {
            validInput = false;
            alert(`Invalid grade input for Subject ${i + 1}. Please enter a value between 0 and 10.`);
            break;
        }
        
        total += grade;
    }

    if (validInput) {
        const cgpa = total / numSubjects;
        document.getElementById('cgpa').innerText = cgpa.toFixed(2);  // Display CGPA with 2 decimal places
    }
}








