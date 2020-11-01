const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = [];
    console.time("for");

    for (let i = 0; i < result.results.length; i++) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }

    for (const i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }

    for (const pessoa of result.results) {
      names.push(pessoa.name);
    }

    console.timeEnd("for");
    console.log(`names`, names);
  } catch (error) {
    console.log("error interno", error);
  }
}
main();
