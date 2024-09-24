let inventario = [
{ nome: 'brinco', preco: 40, emEstoque: true },
{ nome: 'bracelete', preco: 50, emEstoque: false },
{ nome: 'perfume', preco: 160, emEstoque: true }
{ nome: 'choquer', preco: 100, emEstoque: true },
{ nome: 'berloque', preco: 70, emEstoque: false },
{ nome: 'base corretivo', preco: 70, emEstoque: true }
{ nome: 'pó compacto', preco: 40, emEstoque: true },
{ nome: 'sabonete facial', preco: 45, emEstoque: false },
{ nome: 'gel de sobrancelha', preco: 15, emEstoque: true }
{ nome: 'anel', preco: 95, emEstoque: true },
{ nome: 'paleta de sombra', preco: 50, emEstoque: false },
{ nome: 'gloss', preco: 15, emEstoque: true }
{ nome: 'batom', preco: 10, emEstoque: true },
{ nome: 'iluminador', preco: 35, emEstoque: false },
{ nome: 'fixador de maquiagem', preco: 40, emEstoque: true }.
]
                
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
    console.log(inventario[i].nome + ' está em estoque.');
    }
    }
    let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
    console.log(produtosEmEstoque);
    