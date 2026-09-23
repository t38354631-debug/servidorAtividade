const express = require("express");
const pedidos = require("../dados.json");

const mostrarPedidos = (req, res ) => {
    res.send(pedidos)
}

const mostrarP = (req, res ) => {
    const id = req.params.id;
    pedidos.forEach((item) => {
        if(item.id == id ) {
            res.send(item);
        }res.send("pedido nao achado")
    })

}

const postarNovo = (req, res ) => {
  
   if (req.body.id) {
      const novoId =pedidos.lenght + 1;
      req.body.id = 
    res.send("pedido recebido com sucesso!");
    pedidos.push(req.body)
   } else {
    res.send("erro ao realizar pedido!");
    
   }
}

const atualizarPedidos = (req, res ) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.item = dados.item;
            pedido.local = dados.local;
            pedido.dataRegistro = dados.dataRegistro;
            pedido.valor = dados.valor;
            pedido.patrimonio = dados.patrimonio;
        }
    })
}


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const porta = 4000;

app.get("/", mostrarPedidos);

app.get("/pedido/:id", (req, res ) => {
    const pedidosId = parseInt(req.params.id, 1);
    const pedidoP = pedidos.find(p =>p.id === id );
    if (!pedidoP){
        return res.status(404).json ({
            erro: "pedido nao encontrado"});
            res.json(pedidoP);
    }
});
app.post("/", postarNovo);
app.put("/:id", atualizarPedidos);


app.listen(porta, () => {
    console.log("servidor funcionando!")
});