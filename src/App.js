import DefaultLayout from './components/Layouts/DefaultLayout';
import routes from "./routes";
import PublicRoute from "./PublicRoute";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NewsLetter from './newsletter/NewsLetter';
import SliderItems from './components/slider/SliderItems';
import BlogFullWidth from './components/blog/BlogFullWidth';
import Blog from './components/blog/Blog';
import BlogDetails from './components/blog/Blog-Details';


function App() {
  console.log(routes)
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
        <Route path="/" element={<DefaultLayout/>}/>
             {/* {routes.map((route, index) => {
              console.log(route.path);
               <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <PublicRoute component={route.component} />
                    </DefaultLayout>
                  }
                />
              })} */}
              
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blogdetails" element={<BlogDetails/>}/>
               <Route path="/slider" element={<SliderItems/>}/>
              <Route path="/newsletter" element={<NewsLetter/>}/>
              <Route path="/blogfullwidth" element={<BlogFullWidth/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
