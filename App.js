import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/pages/body/Body"
import Footer from "./src/component/Footer"

const AppLayout = () => (
    console.log('body',<Body/>),
    <>
        <Header />
        <Body />
        <Footer />
    </>

)

const container = React.createElement("div", { className: "mainDiv" }, [<AppLayout />])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)