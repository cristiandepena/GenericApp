class NavBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="row">
          <nav class="blue-grey">
              <div class="nav-wrapper">
                  <div class="col s12">
                      <a href="/" class="brand-logo">GenericApp</a>
                  </div>
              </div>
          </nav>
      </div>
    `;
  }
}

window.customElements.define('nav-bar', NavBar);
