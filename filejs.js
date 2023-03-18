function getAllTitles() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        autocomplete(document.getElementById('input'), response);
        const myarray=[]
        myarray.push(response)
        console.log(myarray);
      }
    };
    xhr.send();
  }
  
  function autocomplete(input, myarray) {
  
    input.addEventListener('input', function () {
      
      closeList();
  
      if (!this.value)
          return;
  
      
      suggestions = document.createElement('div');
      suggestions.setAttribute('id', 'suggestions');
      this.parentNode.appendChild(suggestions);
   
  
      
      for (let i=0; i<myarray.length; i++) {
          
            if (myarray[i].title.slice(0, 6).includes(this.value.slice(0, 6))) {
            
          
  
             
              suggestion = document.createElement('div');
              suggestion.innerHTML = myarray[i].title;
              
              suggestion.addEventListener('click', function () {
                  input.target.value = this.innerHTML;
                  closeList();
              });
              suggestion.style.cursor = 'pointer';
  
              suggestions.appendChild(suggestion);
             }
           }
  
          });
  
    function closeList() {
      let suggestions = document.getElementById('suggestions');
      if (suggestions)
          suggestions.parentNode.removeChild(suggestions);
  }
  }
  getAllTitles();