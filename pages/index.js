
import Container from "../component/container"
import Head from "next/head"
import fetch from "isomorphic-fetch"
import Users from "../component/users"
const Index = (props) =>{

    return (
        <Container>
            <Head>
            <title>NextJs Proyect - Home</title>
        </Head>
            <h1>Next</h1>
            <Users users={props}></Users>
        </Container>
    )
}


Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJson = await res.json();
    return {users:resJson.data}
  }

export default Index