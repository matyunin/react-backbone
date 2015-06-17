var Article = Backbone.Model.extend({
    defaults: {
        "author": "n/a",
        "title": "n/a"
    }
});

var ArticlesCollection = Backbone.Collection.extend({
    model: Article,
    url: '/api/articles'
});

var articles = new ArticlesCollection();

var initialFetching = articles.fetch();

initialFetching.done(function (data) {
    console.log(data);
    console.log(articles.toJSON());
    console.log(articles.pluck('author'));
});
