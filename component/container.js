import Navigations from "./navigation"
import Head from "next/head"
const Container = (props) =>{
    return <div>
        <Head>
            <title>NextJs Proyect</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"></link>
        </Head>
        <Navigations></Navigations>
        <div className="container  p-4">
            {props.children}
        </div>
    </div>
}

export default Container