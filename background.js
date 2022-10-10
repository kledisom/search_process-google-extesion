let color = '#ff0000';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({color});
	console.log("TESTE", `color: ${color}`);
});

  chrome.contextMenus.create({
	"id": "search processes",
	"title": "search processes",
	"contexts": ["selection"],
  });


  chrome.contextMenus.onClicked.addListener(function(info, tab) {
	baseURL = "https://busca.inpi.gov.br/pePI/";
	var newURL = baseURL;

	chrome.tabs.create({ url: newURL })
	
  }) 
  