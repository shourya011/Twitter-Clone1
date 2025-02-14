document.addEventListener("DOMContentLoaded", function () {
    loadTrendingTopics();
    loadTrendingTweets();
});

// Function to navigate to different pages
function navigateTo(page) {
    window.location.href = page;
}

// Function to load trending topics dynamically
function loadTrendingTopics() {
    const trendingTopics = [
        "#AIRevolution",
        "#TechNews",
        "#CryptoCrash",
        "#SpaceXLaunch",
        "#OpenAIUpdates",
    ];

    let trendingList = document.getElementById("trending-list");
    trendingTopics.forEach(topic => {
        let li = document.createElement("li");
        li.innerText = topic;
        li.onclick = () => alert(`You clicked on ${topic}`);
        trendingList.appendChild(li);
    });
}

// Function to load trending tweets dynamically
function loadTrendingTweets() {
    const tweets = [
        { user: "@elonmusk", text: "Mars colonization is the future 🚀" },
        { user: "@BillGates", text: "AI will change the world. Are we ready?" },
        { user: "@nasa", text: "Breaking: New exoplanet discovered! 🌍" },
        { user: "@TechCrunch", text: "Big tech companies are shifting to AI-first approach." },
        { user: "@XNews", text: "The latest trends in social media and AI." },
    ];

    let tweetFeed = document.getElementById("tweet-feed");
    tweets.forEach(tweet => {
        let tweetDiv = document.createElement("div");
        tweetDiv.className = "tweet";
        tweetDiv.innerHTML = `
            <p><strong>${tweet.user}</strong></p>
            <p>${tweet.text}</p>
            <div class="tweet-actions">
                <button class="like" onclick="likeTweet(this)">❤️ 0</button>
                <button class="retweet" onclick="retweet(this)">🔄 0</button>
            </div>
        `;
        tweetFeed.appendChild(tweetDiv);
    });
}

// Function to search tweets (simple filter)
function searchTweets() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let tweets = document.querySelectorAll(".tweet");

    tweets.forEach(tweet => {
        let text = tweet.innerText.toLowerCase();
        if (text.includes(input)) {
            tweet.style.display = "block";
        } else {
            tweet.style.display = "none";
        }
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
