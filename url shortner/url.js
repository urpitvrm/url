async function shortenURL() {
    const url = document.getElementById("url").value;
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    document.getElementById('result').innerHTML = `Shortened URL: <a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link}<a>`;

}
