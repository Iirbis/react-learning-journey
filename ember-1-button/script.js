function ChangeMessage(){
    const messages =[
    "You are the chosen one 🌟",
    "Even your coffee fears your power ☕⚡",
    "Coding royalty detected 👑",
    "Mischa and Mimi already know you're awesome 🐶🐶",
    "Your code has awakened ancient magic 🔮",
    "Lucy approves this click 😼"
    ];
    const randomIndex =Math.floor(Math.random() * messages.length);
    const newMessage =messages[randomIndex];

    document.getElementById("message").innerText = newMessage;
}