let icaoPR = [ 'SBMG','SBLO','SBCT' ]
let icaoSP = [ 'SBGR','SBKP','SBSP' ]
let icaoRJ = [ 'SBGL','SBRJ','SBJR' ]

const fetch = require('node-fetch')

fetch('https://www.redemet.aer.mil.br/api/consulta_automatica/index.php?local=sbmg,sbjp,sbgr,sbsp,sbgl,sbrj&msg=metar', { method: 'GET', })
.then(function(response) {
	response.text()
	.then(function(result) {
		console.log(result)
	})
})
.catch(function(error) { console.error(error)})
