import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Footer, Header, NoPosts } from './components';
import { Home, LatestPosts, About, Contact, Terms, ImageLicenseInfo } from './pages';
import { ContextProvider } from './context/ContextProvider';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <main className='content'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='latest-posts'>
                <Route index element={<LatestPosts />} />
                <Route path='animation' element={<LatestPosts />} />
                <Route path='architecture' element={<LatestPosts />} />
                <Route path='graphic-design' element={<LatestPosts />} />
                <Route path='illustration' element={<LatestPosts />} />
                <Route path='interactive-design' element={<LatestPosts />} />
                <Route path='miscellaneous' element={<LatestPosts />} />
                <Route path='photography' element={<LatestPosts />} />
                <Route path='product-design' element={<LatestPosts />} />
                <Route path="*" element={<NoPosts />} />
              </Route>
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='terms' element={<Terms />} />
              <Route path='image-license-info' element={<ImageLicenseInfo />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
