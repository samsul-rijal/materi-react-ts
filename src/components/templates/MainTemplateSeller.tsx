import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import HeaderSeller from '../organisms/HeaderSeller';
import Sidebar from '../organisms/Sidebar';

interface MainTemplateProps {
    children: React.ReactNode;
    pageTitle: string;
    login?: boolean;
}

function MainTemplateSeller({children, pageTitle}: MainTemplateProps) {


  return (
    <div>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='flex flex-col h-screen justify-between'>
            <div>
                <HeaderSeller />
                {/* children itu contentnya */}
                <div className='flex'>
                    <div className='w-1/5 '>
                        <Sidebar />
                    </div>
                    <div className='mt-24 w-4/5 mr-10'>
                        {children} 
                    </div>

                </div>
            </div>

            {/* <Footer /> */}
        </div>
    </div>
  )
}

export default MainTemplateSeller
