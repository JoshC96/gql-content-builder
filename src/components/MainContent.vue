<template>
    <nav class="sidebar">
        <ul>
            <li :key="item.id" v-for="item in items">
                <RouterLink :key="$route.path" :to="item.slug">{{ item.title }}</RouterLink>
            </li>
        </ul>
    </nav>
    <router-view />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import ApiClient from '../ApiClient/ApiClient.js'

export default {
    name: 'MainContent',
    data () {
        return {
            items: []
        }
    },
    async created () {
        const api = new ApiClient();
        const query = "\r\n{\r\n  entries(section: \"pages\", orderBy: \"id ASC\") {\r\n    id\r\n    title\r\n    slug\r\n  }\r\n}";
        const pages = await api.postGraphQL(query, {});
        this.items = pages.data.entries;
    }
};
</script>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #f8f9fa;
    padding: 20px;
}

.sidebar ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.sidebar li {
    margin: 10px 0;
}

.sidebar a {
    display: block;
    color: #495057;
    text-decoration: none;
}

.sidebar a.active {
    font-weight: bold;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

