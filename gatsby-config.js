module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	`gatsby-plugin-sass`,
  	{
  		resolve: 'gatsby-source-filesystem', //Required plugin for markdown blog
  		options: {
  			path: `${__dirname}/src/pages`,
  			name: 'pages'
  		}
  	},
  	`gatsby-transformer-remark` //to transform mark down data
  ],
}
