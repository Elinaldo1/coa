const Produto = require('../models/produto');

async function criar(value)  {
  const database = require('../databases');
  const data = {value}
  try {
    const resultado = await database.sync();
    // console.log(resultado);

    const resutadoOperacao = await   Produto.create({data});
    console.log(resutadoOperacao)
  } catch(error) {
    console.log(error)
  }
}; 
export default criar;
async function insert(){
  try{
    Produto.create({
    nome: 'mouse',
    preco: 10,
    descricao: 'teste insert'
})
  } catch(error){console.log('não deu')}
}

 
 