// prima funzione per chiamata xmlhttprequest tramite get
function getAllTitles() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        autocomplete(document.getElementById('input'), response);
        
        //salvataggio della response allínterno di un array
        const myarray=[]
        myarray.push(response)
        console.log(myarray);
      }
    };
    xhr.send();
  }
  
  //Seconda funzione per implementare autocomplete
  function autocomplete(input, myarray) {
    input.addEventListener('input', function () {
      
      closeList();
   if (!this.value)
          return;
  
      //Creazione div suggerimenti
      suggestions = document.createElement('div');
      suggestions.setAttribute('id', 'suggestions');
      this.parentNode.appendChild(suggestions);
   
   //ciclo contenuto array
      for (let i=0; i < myarray.length; i++) {
         
        //Utilizzo del metodo slice per filtrare le lettere di interesse e matcharle
     if (myarray[i].title.slice(0, 6).includes(this.value.slice(0, 6))) {
           
        // Accesso alla proprieta' title della response e salvataggio dei suggerimenti all'interno di ulteriori div
          suggestion = document.createElement('div');
              suggestion.innerHTML = myarray[i].title;
              suggestion.style.cursor = 'pointer';
               suggestions.appendChild(suggestion);
             }
           }
        });
  
        //funzione per chiudere div contenente lista
    function closeList() {
      let suggestions = document.getElementById('suggestions');
      if (suggestions)
          suggestions.parentNode.removeChild(suggestions);
         }
        }
    //richiamo prima funzione
  getAllTitles();