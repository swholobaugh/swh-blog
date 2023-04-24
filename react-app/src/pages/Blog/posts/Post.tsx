import Layout from "../../../components/layout/Layout";

interface IProps {}
function Post(props: IProps) {
  const {} = props

  return (
    <div>Blog Post Page</div>
  )
}

Post.layout = page => <Layout children={page} title="About" />

export default Post;