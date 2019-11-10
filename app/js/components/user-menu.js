class UserMenu extends HTMLElement {
  constructor() {
    super();

    if (Cookies.get('user')) {
      const { user } = JSON.parse(Cookies.getJSON('user'));

      this.innerHTML = `
        <ul id="dropdown1" class="dropdown-content">
            <li><a onclick="Cookies.remove('user'); window.location.reload();">Logout</a></li>
        </ul>
        <ul class="right">
          <li><a class="dropdown-trigger" data-target="dropdown1">${user}<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      `;
    } else {
      this.innerHTML = `
        <ul class="right">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      `;
    }
    $('.dropdown-trigger').dropdown();
  }
}

window.customElements.define('user-menu', UserMenu);
