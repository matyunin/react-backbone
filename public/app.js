window.schema = {
    models: {},
    collections: {}
};

window.data = {
    models: {},
    collections: {}
};

window.deferred = {};

window.schema.models.Article = Backbone.Model.extend({
    defaults: {
        "author": "n/a",
        "title": "n/a"
    }
});

window.schema.collections.Articles = Backbone.Collection.extend({
    model: window.schema.models.Article,
    url: '/api/articles'
});

window.data.collections.articles = new window.schema.collections.Articles();
