document.getElementById("generateButton").addEventListener("click", generateImage);

function generateImage() {
    const prompt = document.getElementById("promptInput").value;
    const imageContainer = document.getElementById("imageContainer");
    const loading = document.getElementById("loading");

    if (!prompt) {
        alert("Please enter a description.");
        return;
    }

    // Show loading message
    loading.classList.remove("hidden");
    imageContainer.innerHTML = ""; // Clear previous images

    // Simulate image generation delay
    setTimeout(() => {
        // Simulating image generation with a placeholder image
        const img = document.createElement("img");
        img.src = "https://via.placeholder.com/400?text=" + encodeURIComponent(prompt);
        img.alt = "Generated image based on: " + prompt;

        // Hide loading message and display the image
        loading.classList.add("hidden");
        imageContainer.appendChild(img);
    }, 2000); // Simulated delay of 2 seconds
}
