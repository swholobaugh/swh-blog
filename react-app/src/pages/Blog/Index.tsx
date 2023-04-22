import * as React from 'react';
import Layout from "../../components/layout/Layout";
function Blog(props) {
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h1>Blog</h1>
      <h3>Welcome to the blog page</h3>
    </div>
  )
}

Blog.layout = page => <Layout children={page} title="About" />

export default Blog;