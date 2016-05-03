class ArticleActionsCtrl {
  constructor(Articles, User, $state) {
    'ngInject';

    this._Articles = Articles;
    this._$state = $state;

    if (User.current) {
      this.canModify = (User.current.username === this.article.author.username);
    } else {
      this.canModify = false;
    }

  }

  deleteArticle() {
    this.isDeleting = true;
    this._Articles.destroy(this.article.slug).then(
      (success) => this._$state.go('app.home'),
      (err) => this._$state.go('app.home')
    )
  }
}

let ArticleActions = {
  bindings: {
    article: '='
  },
  controller: ArticleActionsCtrl,
  templateUrl: 'article/article-actions.html'
};

export default ArticleActions;
