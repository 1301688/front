import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const components = {
  pre: props => <div {...props} />,
  code: props => (
    <pre style={{ color: "tomato", backgroundColor: "black" }} {...props} />
  ),
}

const ArticleContent = ({ post }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default ArticleContent
