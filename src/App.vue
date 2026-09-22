<template>
  <div>
    <nav class="navbar">
      <h2>Club Membership Manager</h2>

      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/members">Members</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>