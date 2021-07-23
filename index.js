function submitfreq() {
	var hzFreq = document.getElementById("freq")
	// console.log({ hzFreq})
	var resultBox = document.getElementById("comprOnda")
	// LOGICA AQUI! 
	var comprOnda = 343 / Number(hzFreq.value)
	resultBox.innerText = comprOnda  + " m"
	return comprOnda
} 

function submitDist() {
	var distReflex = document.getElementById("dist")
	var resultBox2 = document.getElementById("freqResso")
	var resultBox3 = document.getElementById("freqCancel")
	// LOGICA AQUI! 
	var hzFreq2 = 343 / Number(distReflex.value)
	resultBox2.innerText = hzFreq2 + " hz"
	resultBox3.innerText = hzFreq2/2 + " hz"
} 