document.addEventListener("DOMContentLoaded", function () {
    loadNotifications();
});

// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Function to load notifications dynamically
function loadNotifications() {
    const notifications = [
        { user: "Elon Musk", action: "liked your tweet", avatar: "elon.jpeg" },
        { user: "NASA", action: "mentioned you in a tweet", avatar: "nasa.jpeg" },
        { user: "TechCrunch", action: "retweeted your post", avatar: "tc.png" },
        { user: "Bill Gates", action: "followed you", avatar: "bill.jpeg" },
        { user: "OpenAI", action: "replied to your tweet", avatar: "Openai.png" },
    ];

    let feed = document.getElementById("notifications-feed");
    notifications.forEach(notification => {
        let div = document.createElement("div");
        div.className = "notification";
        div.innerHTML = `
            <img src="${notification.avatar}" alt="${notification.user}">
            <p><strong>${notification.user}</strong> ${notification.action}</p>
        `;
        feed.appendChild(div);
    });
}
