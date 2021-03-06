
$(function () {
    // show saved articles button
    $('.get-saved-btn').on('click', (e) => {
        // get the article matching articleId from the articles table
        $.get('/favorites', (req, res) => {
            window.location.href = '/favorites';
        })
    });

     // save article button
     $('.save-btn').on("click", (e) => {
        $(e.target).text('Saved!');
        // save article info to Article table, get articleId and update User favorites
        const saveAuthor = $(e.target).parent().siblings('.author').html();
        const savePublishedAt = $(e.target).parent().siblings('.publishedAt').data('publishedat');
        const saveSource = $(e.target).parent().siblings('.author').data('source');
        const articleId = savePublishedAt + saveAuthor + saveSource;
        const newObject = {
            author: saveAuthor,
            source: saveSource,
            description: $(e.target).parent().siblings('.description').text(),
            publishedAt: savePublishedAt,
            title: $(e.target).parent().siblings('.header').text(),
            url: $(e.target).siblings('.url').attr('href'),
            urlToImage: $(e.target).parent().parent().parent().siblings('.card-image').data('src'),
            articleId: articleId.replace(/[-,:\.\s]/g, '')
        };
        // update user table with new favorite
        updateUserFavorites(newObject.articleId);
        // update article table with new article
        $.post("/db/save", newObject, () => {
            window.location.href = '/';
        });
    });

    // helper function for showing results of GET requests 
    // clears article-container div and loads the given url
    renderGet = function (url) {
        $.get(url, result => {
            $('#article-container').empty();
            window.location.href = url;
        });
    };

    // user update faves route
    updateUserFavorites = function (articleId) {
        $.post('/api/update_favorites', {articleId: articleId}, () => {
            window.location.href = '/'
        })
    }

});
