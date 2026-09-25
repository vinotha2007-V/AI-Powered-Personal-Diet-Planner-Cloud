import Profile from "./Profile.jsx";
import GenerateDietPlan from "./GenerateDietPlan.jsx";
import SavedPlans from "./SavedPlans.jsx";
import CloudFiles from "./CloudFiles.jsx";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Dashboard() {
  const [page, setPage] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [dietPlan, setDietPlan] = useState(null);

useEffect(() => {
  const savedProfile = localStorage.getItem("profile");

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }
  const savedDietPlan = localStorage.getItem("dietPlan");

if (savedDietPlan) {
  setDietPlan(JSON.parse(savedDietPlan));
}
}, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.reload();
    } catch (error) {
      console.log("Logout Error:", error);
      alert("Logout failed: " + error.message);
    }
  };

  if (page === "profile") {
    return (
      <div>
        <button onClick={() => setPage("dashboard")}>
          ← Back to Dashboard
        </button>
        <Profile />
      </div>
    );
  }

  if (page === "generate") {
    return (
      <div>
        <button onClick={() => setPage("dashboard")}>
          ← Back to Dashboard
        </button>
        <GenerateDietPlan />
      </div>
    );
  }

  if (page === "saved") {
    return (
      <div>
        <button onClick={() => setPage("dashboard")}>
          ← Back to Dashboard
        </button>
        <SavedPlans />
      </div>
    );
  }

  if (page === "cloud") {
    return (
      <div>
        <button onClick={() => setPage("dashboard")}>
          ← Back to Dashboard
        </button>
        <CloudFiles />
      </div>
    );
  }

  return (
    <div>
      <h1>AI-Powered Personal Diet Planner</h1>

      <h2>Welcome to Dashboard 🎉</h2>

      <p>Manage your personalized diet plan here.</p>
      {profile && (
  <div>
    <h3>My Profile</h3>

    <p><b>Name:</b> {profile.name}</p>
    <p><b>Age:</b> {profile.age}</p>
    <p><b>Height:</b> {profile.height} cm</p>
    <p><b>Weight:</b> {profile.weight} kg</p>
  </div>
)}
{dietPlan && (
  <div>
    <h3>Latest Diet Plan</h3>

    <p><b>Goal:</b> {dietPlan.goal}</p>
    <p><b>Diet Preference:</b> {dietPlan.dietPreference}</p>
    <p><b>Activity Level:</b> {dietPlan.activityLevel}</p>

    <p><b>Breakfast:</b> {dietPlan.breakfast}</p>
    <p><b>Lunch:</b> {dietPlan.lunch}</p>
    <p><b>Snack:</b> {dietPlan.snack}</p>
    <p><b>Dinner:</b> {dietPlan.dinner}</p>
    <p><b>Hydration:</b> {dietPlan.hydration}</p>
  </div>
)}

<hr />

      <hr />

      <h3>Quick Actions</h3>

      <button onClick={() => setPage("generate")}>
        Generate Diet Plan
      </button>

      <br />
      <br />

      <button onClick={() => setPage("profile")}>
        My Profile
      </button>

      <br />
      <br />

      <button onClick={() => setPage("saved")}>
        Saved Plans
      </button>

      <br />
      <br />

      <button onClick={() => setPage("cloud")}>
        Cloud Files
      </button>

      <br />
      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

      <hr />

      <h3>Project Features</h3>

      <p>✅ User Profile Management</p>
      <p>✅ Personalized Diet Plan Generation</p>
      <p>✅ Saved Diet Plans</p>
      <p>✅ Cloud File Storage</p>
    </div>
  );
}

export default Dashboard;