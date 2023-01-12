import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/PageView.vue'
import ApiClient from '../ApiClient/ApiClient.js'

const routes = await getRoutes();
const router = createRouter(routes)

async function getRoutes(){
  let router = {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      }
    ]
  };

  const api = new ApiClient();
  const query = "\r\n{\r\n  entries(section: \"pages\", orderBy: \"id ASC\") {\r\n    id\r\n    title\r\n    slug\r\n  }\r\n}";
  const pages = await api.postGraphQL(query, {});

  pages.data.entries.forEach((entry) => {
    return router.routes.push({
      path: '/' + entry.slug,
      name: entry.slug,
      component: PageView,
      props: { pageid: entry.id },
    })
  });

  return router;
}

export default router
