import React from "react";

function WelcomeForm() {
  const [welcomeName, setWelcomeName] = React.useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    console.log(text);
    setWelcomeName(text);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={welcomeName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Welcome, {welcomeName} to the masterclass</h1>
    </div>
  );
}

export default WelcomeForm;
