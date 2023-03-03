import SliderItems from "./components/slider/SliderItems";
import NewsLetter from "./newsletter/NewsLetter";


const routes = [
    { path: "/", component: NewsLetter},
    { path: "/news", component: NewsLetter},
   { path: "/slider", component: SliderItems},
];

export default routes
