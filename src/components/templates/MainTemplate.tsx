import React, { useState } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import { Helmet } from 'react-helmet'
import { useAuth } from '../../context/AuthContext';

interface MainTemplateProps {
    children: React.ReactNode;
    pageTitle: string;
    login?: boolean;
}

function MainTemplate({children, pageTitle}: MainTemplateProps) {


  return (
    <div>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='flex flex-col h-screen justify-between'>
            <div>
                <Header />
                {/* children itu contentnya */}
                <div className='mt-28'>
                    {children} 
                </div>
            </div>

            <Footer />
        </div>
    </div>
  )
}

export default MainTemplate
