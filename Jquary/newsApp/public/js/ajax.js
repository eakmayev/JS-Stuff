var $author = $('#author');
var $title = $('#title');
var $articles = $('#articles');

var newsTemplate = " " +
		"<li>" +
		"<p><strong>Author:</strong> {{author}}</p>" +
		"<p><strong>Title:</strong> {{title}}</p>" +
		"<button id='{{id}}' class='remove'>X</button>"+
		"</li>";

		function addArticle(article){
			$articles.append(Mustache.render(newsTemplate, article));
		};

var KEY = '5ca7b5812d5648ca9d55d57a60509a26';

$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=' + KEY,
	}).done(function(article){
		console.log(article);
		$.each(article.articles, function(i, article){
			addArticle(article);
		});
	}).fail(function(){
		console.log('Error');
	});

 });


