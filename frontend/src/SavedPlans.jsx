import { useState } from "react";

function SavedPlans() {
  const [plan, setPlan] = useState(null);

  const loadPlan = () => {
    const savedPlan = localStorage.getItem("dietPlan");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    } else {
      alert("No saved diet plan found!");
    }
  };

  return (
    <div>
      <h1>Saved Plans</h1>

      <button onClick={loadPlan}>
        View Saved Plan
      </button>

      {plan && (
        <div>
          <h2>My Saved Diet Plan</h2>
          <p><b>Goal:</b> {plan.goal}</p>
          <p><b>Diet Preference:</b> {plan.dietPreference}</p>
          <p><b>Activity Level:</b> {plan.activityLevel}</p>
          <p><b>Breakfast:</b> {plan.breakfast}</p>
          <p><b>Lunch:</b> {plan.lunch}</p>
          <p><b>Snack:</b> {plan.snack}</p>
          <p><b>Dinner:</b> {plan.dinner}</p>
          <p><b>Hydration:</b> {plan.hydration}</p>
        </div>
      )}
    </div>
  );
}

export default SavedPlans;