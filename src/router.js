import { createWebHistory, createRouter } from "vue-router";
import ContentList from "@/components/ContentList";
import HomePage from "@/components/HomePage";
import ContentDetail from "@/components/ContentDetail";
import NotFound from "@/components/NotFound";
import AuthorPage from "@/components/AuthorPage";
import CommentPage from "@/components/CommentPage";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/list",
        component: ContentList,
    },
    {
        path: "/detail/:id(\\d+)",
        component: ContentDetail,
        children: [
            {
                path:"author",
                component: AuthorPage
            },
             {
                 path:"comment",
                 component: CommentPage
             }
        ]
    },
    {
        path: "/:anything(.*)",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 