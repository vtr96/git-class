//articleLoader.js
function parseArticle(article) {
	fetch(article)
		.then(response => response.text())
		.then(markdown => {
			const html = marked.parse(markdown);
			document.getElementById('content').innerHTML = html;
		})
		.catch(err => {
			document.getElementById('content').textContent = 'Error loading article.';
			console.error(err);
		});
	}