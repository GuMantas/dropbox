const API_URL = 'https://jsonplaceholder.typicode.com/users';
let userTables = [];
const userT = document.getElementById('userTable');
let content = [];
const header = `<tr>
<th>Name</th>
<th>Username</th>
<th>Email</th>
</tr>`;


function getPosts() {
    return fetch(`${API_URL}/`)
    .then(data => data.json());
    
}

function renderTable (arr){
arr.forEach(element => {
    userTables.push({
        id: element.id,
        name: element.name,
        username: element.username,
        email: element.email,
    })
    
});
user(userTables)
};

getPosts()
.then(data => renderTable(data))
 


  function user  (arr) {
    arr.forEach((element) => {
  content += `
      <tr>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      </tr>`
    });
    userT.innerHTML = header + content;
  }
