import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
	const {markdownRemark: post} = data; //Retieving post from data.markdownRemark

	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{__html: post.html}} />
		</div>
	)
}

//GraphQL query to grab the post using the path
export const postQuery = graphql`
	query blogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path : { eq: $path } } ) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`