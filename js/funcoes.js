

let textsArray;
await fetch('../index.xml')
.then(response => response.text())
.then(xml => {
    let xmlContent = xml;
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    let texts = xmlDOM.querySelectorAll('lbl');
    textsArray = texts
})

/* 
Selecionando todos os elementos que estão dentro da tag com id xml
e possuem o atributo data-text 
*/
let divsXml = document.querySelectorAll('#xml [data-text]')
/* Adicionando o valor do elemento se o data-text for igual ao elemento no xml */
divsXml.forEach((item, index) =>{
    if(item.dataset.text == textsArray[index].attributes[0].value){
         item.innerHTML = textsArray[index].innerHTML
    }  
})

