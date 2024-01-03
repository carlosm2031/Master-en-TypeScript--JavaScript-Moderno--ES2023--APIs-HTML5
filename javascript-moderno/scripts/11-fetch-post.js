let nuevo_post = JSON.stringify({
    title: "NUEVO POST DE CARLOS",
    body: "CONTENIDO DEL POST",
    userId: 20
});

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body: nuevo_post,
    headers:{
        "Content-type":"application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json));


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {console.log(data.userId[20])});