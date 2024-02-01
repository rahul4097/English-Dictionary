var url="https://api.dictionaryapi.dev/api/v2/entries/en/"

var input=document.querySelector('.search');
var speech1=document.querySelector('.speech1')
var speech2= document.querySelector('.speech2')
var meaning=document.querySelector('.meaning1')
var meaning2=document.querySelector('.meaning2')
var example1= document.querySelector('.example1')
var example2= document.querySelector('.example2')
var partsSpeech1= document.querySelector('.parts-of-speech1')
var partsSpeech2= document.querySelector('.parts-of-speech2')


async function check(word) {
	const response = await fetch(url + word );
	if(response.status==404){
		document.querySelector('.defination-background').style.display='none'
		document.querySelector('.error').style.display='block'

	}
	else{
		const result = await response.json();
		document.querySelector('.defination-background').style.display='block'
		console.log(result);
	
		meaning.innerHTML=result[0].meanings[0].definitions[0].definition;
		example1.innerHTML=result[0].meanings[0].definitions[0].example;
		partsSpeech1.innerHTML=result[0].meanings[0].partOfSpeech

		meaning2.innerHTML=result[0].meanings[1].definitions[0].definition;
		example2.innerHTML=result[0].meanings[1].definitions[0].example;
		partsSpeech2.innerHTML=result[0].meanings[1].partOfSpeech

		document.querySelector('.error').style.display='none'

	}
} 
document.querySelector('.defination-background').style.display='none'
document.querySelector('.error').style.display='none'


document.querySelector('.search-icon').addEventListener('click',()=>{
	check(input.value);
})
document.querySelector('input').addEventListener('keypress' ,(e)=>{
    if(e.key==='Enter'){
	check(input.value);
    document.querySelector('.search').click();
    }
});