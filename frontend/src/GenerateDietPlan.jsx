import { useState } from "react";

function GenerateDietPlan() {
  const [goal, setGoal] = useState("");
  const [dietPreference, setDietPreference] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = () => {
    const profile = JSON.parse(localStorage.getItem("profile"));

    if (!profile) {
      alert("Please complete My Profile first!");
      return;
    }

    if (!goal || !dietPreference || !activityLevel) {
      alert("Please select all parameters!");
      return;
    }

    const newPlan = {
      goal: goal,
      dietPreference: dietPreference,
      activityLevel: activityLevel,

      breakfast: "Oatmeal with banana and milk",
      lunch: "Rice, vegetables and dal",
      snack: "Apple and nuts",
      dinner: "Chapati with vegetable curry",
      hydration: "Drink enough water throughout the day",
    };

    setPlan(newPlan);

    localStorage.setItem("dietPlan", JSON.stringify(newPlan));
  };

  return (
    <div>
      <h1>Generate Diet Plan</h1>

      <h3>Goal</h3>
      <select value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select Goal</option>
        <option value="Weight Loss">Weight Loss</option>
        <option value="Weight Gain">Weight Gain</option>
        <option value="Maintain Weight">Maintain Weight</option>
      </select>

      <h3>Diet Preference</h3>
      <select
        value={dietPreference}
        onChange={(e) => setDietPreference(e.target.value)}
      >
        <option value="">Select Diet Preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>

      <h3>Activity Level</h3>
      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      >
        <option value="">Select Activity Level</option>
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </select>

      <br />
      <br />

      <button onClick={generatePlan}>
        Generate Diet Plan
      </button>

      {plan && (
        <div>
          <h2>Your Diet Plan</h2>

          <p>
            <b>Goal:</b> {plan.goal}
          </p>

          <p>
            <b>Diet Preference:</b> {plan.dietPreference}
          </p>

          <p>
            <b>Activity Level:</b> {plan.activityLevel}
          </p>

          <h3>Breakfast</h3>
          <p>{plan.breakfast}</p>

          <h3>Lunch</h3>
          <p>{plan.lunch}</p>

          <h3>Snack</h3>
          <p>{plan.snack}</p>

          <h3>Dinner</h3>
          <p>{plan.dinner}</p>

          <h3>Hydration</h3>
          <p>{plan.hydration}</p>
        </div>
      )}
    </div>
  );
}

export default GenerateDietPlan;