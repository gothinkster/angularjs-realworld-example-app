class ListPaginationCtrl {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;

  }

  pageRange(total) {
    let pages = [];

    for (var i = 0; i < total; i++) {
      pages.push(i + 1)
    }

    return pages;
  }

  changePage(number) {
    this._$scope.$emit('setPageTo', number);
  }


}

let ListPagination= {
  bindings: {
    totalPages: '=',
    currentPage: '='
  },
  controller: ListPaginationCtrl,
  templateUrl: 'components/article-helpers/list-pagination.html'
};

export default ListPagination;
