document.getElementById('calculateBtn').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value)/100;
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  if (!weight || !height || !age) {
    alert("Please fill all fields!");
    return;
  }


  const bmi = (weight/(height*height)).toFixed(1);
  let bmiStatus = "";
  if (bmi < 18.5) bmiStatus="Underweight";
  else if (bmi<25) bmiStatus="Normal";
  else if (bmi<30) bmiStatus="Overweight";
  else bmiStatus="Obese";


  let bmr;
  if (gender==="male") bmr=10*weight+6.25*(height*100)-5*age+5;
  else bmr=10*weight+6.25*(height*100)-5*age-161;

  let calories = bmr*activity;
  if (goal==="lose") calories -= 500;
  if (goal==="gain") calories += 500;

  let protein = weight * 2; // grams per kg
  let fat = (calories*0.25)/9; // 25% of calories
  let carbs = (calories - (protein*4 + fat*9))/4;

  let desc = "";
  if (goal==="maintain") desc="Maintain your weight by eating balanced calories.";
  else if(goal==="lose") desc="For weight loss, maintain a calorie deficit and exercise regularly.";
  else desc="For weight gain, increase calorie intake and focus on strength training.";

  
  let messages = [
    "Consistency is key! 💪",
    "Every step counts! 🏃‍♂️",
    "Stay focused and motivated! 🚀",
    "Keep pushing, you got this! 🔥"
  ];
  let motivation = messages[Math.floor(Math.random()*messages.length)];

  
  document.getElementById('bmiResult').innerText = `BMI: ${bmi} (${bmiStatus})`;
  document.getElementById('calorieResult').innerText = `Daily Calories: ${Math.round(calories)} kcal`;
  document.getElementById('macroResult').innerText = `Protein: ${Math.round(protein)}g | Carbs: ${Math.round(carbs)}g | Fats: ${Math.round(fat)}g`;
  document.getElementById('goalDesc').innerText = desc;
  document.getElementById('motivation').innerText = motivation;
  document.getElementById('results').classList.remove('hidden');
});
