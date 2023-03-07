Vue.component('nav-bar', {
  template: `
    <div class="row">
      <nav class="blue-grey">
          <div class="nav-wrapper">
              <div class="col s12">
                  <a href="/" class="left brand-logo">GenericApp</a>
                  <ul class="right">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  `,
});

Vue.component('user-menu', {
  template: `
  <ul id="dropdown1" class="dropdown-content">
    <li><a onclick="Cookies.remove('user'); window.location.reload();">Logout</a></li>
  </ul>
  <ul class="right">
    <li><a class="dropdown-trigger" data-target="dropdown1">${this.user}<i class="material-icons right">arrow_drop_down</i></a></li>
  </ul>
  `,
  data() {
    return {
      user: {}
    },
  }
});

const app = new Vue({
  el: '#app',
});
