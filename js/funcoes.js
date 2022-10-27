
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
let divsXml = document.querySelectorAll('#xml [data-text]')

divsXml.forEach((item, index) =>{
    if(item.dataset.text == textsArray[index].attributes[0].value){
         item.innerHTML = textsArray[index].innerHTML
    }  
})

