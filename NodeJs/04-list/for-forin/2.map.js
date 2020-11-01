const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas(`a`);

    // result.results.forEach(function (item) {
    //   names.push(item.name);
    // });

    const names = result.results.map((pessoa) => pessoa.name);

    console.log("names", names);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
main();
