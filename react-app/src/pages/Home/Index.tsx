import * as React from 'react';
import Layout from "../../components/layout/Layout";

interface IProps {}
function Home(props: IProps) {
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h1>Home</h1>
      <h3>Welcome to home page</h3>
    </div>
  )
}

Home.layout = page => <Layout children={page} title="Home" />

export default Home;