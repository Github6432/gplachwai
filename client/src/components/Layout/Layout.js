import React from 'react'
import {Helmet} from 'react-helmet'
import { Toaster } from "react-hot-toast";
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, description, keywords, author, title }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "72vh" }}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.defultProps = {
    title: 'Ecommerce App - Shop Now',
    description: 'MERN stack project',
    keywords: 'mern, react, node, mongodb',
    author: 'JMT',
}

export default Layout