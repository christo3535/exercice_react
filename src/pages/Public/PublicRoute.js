import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Public/Home'
import Layout from '@/pages/Public/Layout'
import Service from '@/pages/Public/Service'
import Contact from '@/pages/Public/Contact'
import Error from '@/.utils/Error';

const PublicRoute = () => {
    return (
        <div className='PublicRoute'>
            <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        </div>
    );
};

export default PublicRoute;