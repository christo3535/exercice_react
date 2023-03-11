import React from 'react';
import { Route, Routes } from 'react-router-dom';

 import Error from '@/.utils/Error';

import { Layout, Home, Service, Contact } from '@/pages/Public'

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