import { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSave = (e) => {
  e.preventDefault();

  const profile = {
    name: name,
    age: age,
    height: height,
    weight: weight
  };

  localStorage.setItem("profile", JSON.stringify(profile));

  alert("Profile Saved Successfully!");
};
  return (
    <div>
      <h1>My Profile</h1>

      <form onSubmit={handleSave}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Save Profile
        </button>

      </form>
    </div>
  );
}

export default Profile;