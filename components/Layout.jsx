import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"
import { Fragment } from "react"

export default function Layout({children, title = "deveq's Portfolio"}) {
    return (
        <div className="bg-primary">
            <Head>
                <title>{title}</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}