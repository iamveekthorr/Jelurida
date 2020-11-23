<template>
  <header class="sidebar">
    <div class="header-group">
      <h1>Jelurida</h1>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/home"
              ><span><i class="fas fa-home"></i></span>Home</router-link
            >
          </li>
          <li>
            <router-link to="/certificates"
              ><span><i class="fas fa-file-alt"></i></span
              >Certificates</router-link
            >
          </li>
          <li>
            <router-link to="/profile"
              ><span><i class="fas fa-user"></i></span>My Profile</router-link
            >
          </li>
          <li>
            <router-link to="/settings"
              ><span><i class="fas fa-cog"></i></span>Settings</router-link
            >
          </li>
          <li>
            <router-link to="/support"
              ><span><i class="fas fa-headset"></i></span>Support</router-link
            >
          </li>
        </ul>
      </nav>
      <base-button class="btn">Logout</base-button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 20%;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 2rem 2.5rem;
  // font-size: 0.65em;
}

.header-group {
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  // font-weight: bold;

  h1 {
    font-size: 1.7rem;
    color: #005eff;
  }

  a {
    color: #000000;
    opacity: 0.62;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin: 1rem 0;
    // border: 2px solid transparent;

    &.router-link-active {
      color: #005eff;
      opacity: 1;
      // border: #2d323a;
    }
  }

  button {
    align-self: center;
    margin-top: 16rem;
    opacity: 0.62;
    background: #fff;
  }
}

.nav {
  position: relative;
  margin-top: 5rem;
}
</style>