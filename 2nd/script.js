// Function to handle posting a tweet
function postTweet() {
    let input = document.getElementById("tweet-input").value;
    if (input.trim() === "") return;

    let feed = document.getElementById("feed");
    let tweet = document.createElement("div");
    tweet.className = "tweet";
    tweet.innerHTML = `
        <p>${input}</p>
        <div class="tweet-actions">
            <button class="like" onclick="likeTweet(this)">❤️ 0</button>
            <button class="retweet" onclick="retweet(this)">🔄 0</button>
        </div>
    `;

    feed.prepend(tweet);
    document.getElementById("tweet-input").value = "";
}

// Function to handle likes
function likeTweet(button) {
    let count = parseInt(button.innerText.split(" ")[1]);
    button.innerText = `❤️ ${count + 1}`;
}

// Function to handle retweets
function retweet(button) {
    let count = parseInt(button.innerText.split(" ")[1]);
    button.innerText = `🔄 ${count + 1}`;
}

