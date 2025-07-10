function trackMood() {
    const mood = document.getElementById("moodInput").value.toLowerCase();
    const messageElement = document.getElementById("moodMessage");

    if(mood === "happy"){
        messageElement.innerText = "✨ That’s the vibe we like to see!";
    } else if (mood === "sad"){
        messageElement.innerText = "💙 Sad is okay. You're not alone.";
    } else if (mood === "tired"){
        messageElement.innerText = "😴 Go rest, champion of code.";
    } else if (mood === "angry"){
        messageElement.innerText = "🔥 Let’s channel that into your next commit!"
    } else {
        messageElement.innerText = "🌀 Mood unclear, but you're still iconic."
    }
}