module.exports = {
  plugins: [
	  'tailwindcss',
		'postcss-flexbugs-fixes',
		[
		  'postcss-preset-env',
			{
			  autoprfixer: {
				  flexbox: 'no-2009'
				},
				stage: 3,
				features: {
				  'custom-properties': false
				}
			}
		]
	]
}
