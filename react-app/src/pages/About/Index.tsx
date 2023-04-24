import * as React from 'react';
import Layout from "../../components/layout/Layout";

interface IProps {
  name: string
}
function About(props: IProps) {
  const {name} = props
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h1>About</h1>
      <div>Welcome to the About Page, {name}</div>
    </div>
  )
}

About.layout = page => <Layout children={page} title="About" />

export default About;