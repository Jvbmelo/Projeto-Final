fetch("https://hp-api.onrender.com/api/spells")
    .then((resp) => resp.json())
    .then((dados) => {
        console.log(dados)
        
        const nome = dados[0]
        
        let name = document.createElement("p")
        name.innerText = (nome.name)
        document.body.append(name)

        let description = document.createElement("p")
        description.innerText = (nome.description)
        document.body.append(description)
        
    })