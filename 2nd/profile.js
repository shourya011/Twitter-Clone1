document.addEventListener("DOMContentLoaded", function () {
    loadUserTweets();
});

// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Function to load user's tweets dynamically
function loadUserTweets() {
    const tweets = [
        { text: "Excited to start my new project! 🚀 #Coding", likes: 12, retweets: 5 },
        { text: "JavaScript is amazing! 🔥", likes: 34, retweets: 10 },
        { text: "AI will change the world. Are we ready? 🤖", likes: 20, retweets: 8 },
    ];

    let tweetFeed = document.getElementById("tweet-feed");
    tweets.forEach(tweet => {
        let tweetDiv = document.createElement("div");
        tweetDiv.className = "tweet";
        tweetDiv.innerHTML = `
            <p>${tweet.text}</p>
            <div class="tweet-actions">
                <button class="like" onclick="likeTweet(this)">❤️ ${tweet.likes}</button>
                <button class="retweet" onclick="retweet(this)">🔄 ${tweet.retweets}</button>
            </div>
        `;
        tweetFeed.appendChild(tweetDiv);
    });
}

// Function to like tweets
function likeTweet(button) {
    let count = parseInt(button.innerText.split(" ")[1]);
    button.innerText = `❤️ ${count + 1}`;
}

// Function to retweet
function retweet(button) {
    let count = parseInt(button.innerText.split(" ")[1]);
    button.innerText = `🔄 ${count + 1}`;
}

// Function to edit profile
function editProfile() {
    let newName = prompt("Enter your new name:", document.getElementById("profile-name").innerText);
    let newBio = prompt("Enter your new bio:", document.getElementById("profile-bio").innerText);
    
    if (newName) {
        document.getElementById("profile-name").innerText = newName;
    }
    if (newBio) {
        document.getElementById("profile-bio").innerText = newBio;
    }
}
