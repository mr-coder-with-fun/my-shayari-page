/* File: scripts.js */
document.querySelector('.signup').addEventListener('click', () => {
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'signup' }),
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
});

document.querySelector('.login').addEventListener('click', () => {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'login' }),
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
});

document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => alert(`Search Results: ${data.results}`))
        .catch(error => console.error('Error:', error));
});

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


//shayari section

 // Add Event Listeners for All Cards
document.querySelectorAll('.shayari-card').forEach((card) => {
    const copyBtn = card.querySelector('.copy-btn');
    const shareBtn = card.querySelector('.share-btn');
    const likeBtn = card.querySelector('.like-btn');
    const favoriteBtn = card.querySelector('.favorite-btn');

    // Copy Button Functionality
    copyBtn.addEventListener('click', () => {
        const text = card.querySelector('.shayari-text').innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('Shayari copied to clipboard!');
        });
    });

    // Share Button Functionality
    shareBtn.addEventListener('click', () => {
        const text = card.querySelector('.shayari-text').innerText;
        if (navigator.share) {
            navigator.share({
                title: 'Shayari',
                text: text,
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert('Share not supported on this browser.');
        }
    });

    // Like Button Functionality
    likeBtn.addEventListener('click', function () {
        this.classList.toggle('liked');
        this.innerText = this.classList.contains('liked') ? '❤️ Liked' : '❤️ Like';
    });

    // Favorite Button Functionality
    favoriteBtn.addEventListener('click', function () {
        this.classList.toggle('favorited');
        this.innerText = this.classList.contains('favorited') ? '⭐ Favorited' : '⭐ Favorite';
    });
});

