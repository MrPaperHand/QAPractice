document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const requestData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
      } else {
        console.error("Registration failed:", response.status);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  });