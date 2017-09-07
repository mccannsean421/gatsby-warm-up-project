/***

	This is where all of the blog pages are created.
	Using the createPage() funtion from the Gatsby API

***/

const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
	const {createPage} = boundActionCreators;
	
	//value assigned to the template we want used
	const postTemplate = path.resolve('src/templates/post.js');

	/* GRAPH QL QUERY TO RETURN ALL POSTS */
	return graphql(`{
		allMarkdownRemark {
			edges {
				node {
					html
					id
					frontmatter {
						path
						title
					}
				}
			}
		}
	}`)
	.then(res => {
		/* RESPOND WITH AN ERROR */
		if(res.errors) {
			return Promise.reject(res.errors)
		}

		//Respond with the markdown data
		res.data.allMarkdownRemark.edges.forEach( ({node}) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate
			})
		}) //edges = node itself
	})
}