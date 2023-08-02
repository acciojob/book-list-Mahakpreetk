//your JS code here. If required.
function addBook(){
	const title= document.getElementById('title').value;
	const author=document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	if(title && author && isbn){
		const bookList = document.getElementById('book-list');
		const newRow=document.createElement('tr');
		newRow.innerHTML = `
          <td>${title}</td>
          <td>${author}</td>
          <td>${isbn}</td>
          <td><button class="delete" onclick="deleteBook(this)">Delete</button></td>
        `;
		bookList.appendChild(newRow);

		//Clear input fields after adding a new row
		document.getElementById('title').value='';
		document.getElementById('author').value='';
		document.getElementById('isbn').value='';
	}
	else{
		alert('Please fill in details');
	}
		
	}

function deleteBook(button){
	const row=button.parentNode.parentNode;
	row.remove;
}

document.getElementById('submit').addEventListener('click', addBook);
}