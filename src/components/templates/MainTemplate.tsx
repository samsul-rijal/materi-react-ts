import React, { useState } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import { Helmet } from 'react-helmet'

interface MainTemplateProps {
    children: React.ReactNode;
    pageTitle: string;
    login?: boolean;
}

function MainTemplate({children, pageTitle, login}: MainTemplateProps) {

    const [isLogin, setIsLogin] = useState<boolean>(login || false)

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

  return (
    <div>
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
        <div className='flex flex-col h-screen justify-between'>
            <div>
                <Header isLogin={isLogin} title="Rey" handleLogout={handleLogin} />
                {/* children itu contentnya */}
                <div className='mt-6'>
                    {children} 
                </div>
            </div>

            <Footer />
        </div>
    </div>
  )
}

export default MainTemplate
