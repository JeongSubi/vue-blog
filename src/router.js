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
        // beforeEnter: (to, from)=>{
        //     return to.fullPath
        // }
        // 첫 파라미터는 목적지 페이지,
        // 둘째 파라미터는 출발 페이지입니다.
        // 그리고 그것들은 $route라는 변수랑 똑같이 이용가능합니다.
        //     to.fullPath하면 전체 경로를 알려주고
        // to.params.id 하면 id 파라미터를 알려주고 그렇습니다.
        // 참고로 return false는 라우팅 중단,
        // return이 없으면 그냥 원래의 route인 / 잘 이동시켜줍니다.
},
    {
        path: "/list",
        component: ContentList,
        // beforeEnter: ()=>{
        //     if (로그인했냐 == false) {
        //         return '/login'
        //     }
        // }
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
    // history: createWebHashHistory(),
    // URL에서 # 뒤에 있는 내용들은 절대 서버로 전달되지 않아서 그렇습니다.
    // 그래서 서버가 라우팅을 채가는 일을 방지할 수 있고
    // Vue router에게 온전히 라우팅을 맡길 수 있는 것입니다.
    routes,
});

// router.beforeEach((to, from) => {
    // 페이지 변경 전에 실행할 코드
    // 여러개의 route에 같은 navigation guard를 추가하고 싶으면
// })

// router.beforeResolve((to, from) => {
//페이지 변경 전에 실행할 코드
// })

// router.afterEach((to, from) => {
//페이지 변경 후에 실행할 코드
// })

export default router; 