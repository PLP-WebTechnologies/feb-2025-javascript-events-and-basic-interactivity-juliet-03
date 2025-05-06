document.getElementById("clickBtn").addEventListener("click",()=>{
    alert("Button clicked");});

    document.getElementById("keyInput").addEventListener("keyDown",(e)=>{
        console.log("you pressed:  ${e.key}");});
        document.getElementById("secret").addEventListener("dblclick", () => {
            const secret = document.getElementById("secret");
            secret.classList.toggle("active");
            secret.textContent = secret.classList.contains("active")
              ? "🎉 Secret Revealed!"
              : "🤫 Secret Action";
          });
          
          // Change text and color
          document.getElementById("changeBtn").addEventListener("click", () => {
            const btn = document.getElementById("changeBtn");
            btn.style.backgroundColor = "#43a047";
            btn.textContent = "Color Changed!";
            });
            const images = [
                "https://placekitten.com/300/200",
                "https://placekitten.com/301/200",
                "https://placekitten.com/302/200"
              ];
              let imgIndex = 0;
              
              document.getElementById("nextImg").addEventListener("click", () => {
                imgIndex = (imgIndex + 1) % images.length;
                document.getElementById("galleryImage").src = images[imgIndex];
              });
              
              // Tabs
              document.querySelectorAll(".tabBtn").forEach(button => {
                button.addEventListener("click", () => {
                    document.querySelectorAll(".tabContent").forEach(tab => {
                        tab.style.display = "none";
                      });
                  const tabId = button.getAttribute("data-tab");
                  document.getElementById(tabId).style.display = "block";
                });
              });
              
              // Form validation
              document.getElementById("signupForm").addEventListener("submit", (e) => {
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let valid = true;
              
                if (!emailRegex.test(email)) {
                  alert("Invalid email format.");
                  valid = false;
                }
              
                if (password.length < 8) {
                  alert("Password must be at least 8 characters.");
                  valid = false;
                }
              
                if (!valid) e.preventDefault();
              });
              
              // Real-time feedback
              document.getElementById("password").addEventListener("input", (e) => {
                const feedback = document.getElementById("passwordFeedback");
                if (e.target.value.length < 8) {
                  feedback.textContent = "Too short!";
                  feedback.style.color = "red";
                } else {
                  feedback.textContent
              = "Strong password!";
                  feedback.style.color = "green";
                }
              });