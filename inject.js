(function (chrome) {

console.log('Executing...')

const nProcess = 'https://busca.inpi.gov.br/pePI/jsp/marcas/Pesquisa_num_processo.jsp';
const homeProcess = 'https://busca.inpi.gov.br/pePI/';
const marcasProcess = 'https://busca.inpi.gov.br/pePI/servlet/LoginController?action=login';
let marcador = document.querySelector('.marcador');
let home = window.location.href;

if(home == nProcess || home == homeProcess || home == marcasProcess) {
  //location.href = "https://busca.inpi.gov.br/pePI/jsp/marcas/Pesquisa_num_processo.jsp"
 
	 if(marcador) {
		 console.log('existe')
		 location.href = marcasProcess;
	 };
 
 	 if(home == marcasProcess) {
		 console.log('indo')
		 location.href = nProcess;
	 }
};

let janela = window.location.href;
if(janela != 'https://busca.inpi.gov.br/pePI/jsp/marcas/Pesquisa_num_processo.jsp') {
      
    document.addEventListener('selectionchange', (e) => {
        let selObj = window.getSelection();
        let selRange = selObj.toString();
        let separador = `${selRange}`.split('.').join('');
    
        chrome.storage.sync.set({'key': separador}, function() {
            console.log('Saved...');
        });
    });
       
};

chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
    al(result.key);
    console.log('Searching...')
}); 

async function al(chave) {
    var n = await chave;
    let janela = window.location.href;
    if(janela == 'https://busca.inpi.gov.br/pePI/jsp/marcas/Pesquisa_num_processo.jsp') {
      let process = document.querySelector('[name="NumPedido"]');
        process.value = n;                  
    }
};



})(chrome);