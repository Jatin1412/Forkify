class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
      const query = this._parentEl.querySelector('.search__field').value.trim(); // Trim spaces
      this._clearInput();
      if (!query) return null; // Return null if empty
      return query;
  }

  _clearInput() {
      this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
      this._parentEl.addEventListener('submit', function (e) {
          e.preventDefault();
          const query = this.querySelector('.search__field').value.trim();
          if (!query) return; // Stop execution if input is empty
          handler();
      });
  }
}

export default new SearchView();
