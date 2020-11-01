/*
0 Obter um usuario
1 Obter numero de usuario a partir de seu Id
2 Obter o end do usuario pelo Id
*/
const util = require("util");
const { time } = require("console");

const obterEndAsync = util.promisify(obterEnd);

function obterUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      // return reject(new Error('DEU RUIM DE VDD!!!'))

      return resolve({
        id: 1,
        nome: "Lucas",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTel(idUser) {
  return new Promise(function (resolve, error) {
    setTimeout(() => {
      return resolve({
        telefone: "997658595",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEnd(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

main();
async function main() {
  try {
    console.time("medida-promise");
    const usuario = await obterUser();
    // const telefone = await obterTel(usuario.id);
    // const endereco = await obterEndAsync(usuario.id);
    const resultado = await Promise.all([
      obterTel(usuario.id),
      obterEndAsync(usuario.id),
    ]);
    const endereco = resultado[1];
    const telefone = resultado[0];
    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereco: ${endereco.rua}, n°${endereco.numero}
    `);
    console.timeEnd("medida-promise");
  } catch (error) {
    console.log("DEU RUIM", error);
  }
}
// const userprimise = obterUser();

// userprimise
//   .then(function (user) {
//     return obterTel(user.id).then(function resolverTel(result) {
//       return {
//         user: {
//           nome: user.nome,
//           id: user.id,
//         },
//         telefone: result,
//       };
//     });
//   })
//   .then(function (resultado) {
//     const end = obterEndAsync(resultado.user.id);
//     return end.then(function resolverEnd(result) {
//       return {
//         usuario: resultado.user,
//         telefone: resultado.telefone,
//         endereco: result,
//       };
//     });
//   })
//   .then(function (resolve) {
//     console.log(`
//       Nome: ${resolve.usuario.nome}
//       Endereco: ${resolve.endereco.rua}, ${resolve.endereco.numero}
//       Telefone: (${resolve.telefone.ddd}) ${resolve.telefone.telefone}
//     `);
//   })
//   .catch(function (error) {
//     console.log("DEU RUIM", error);
//   });
// obterUser(function resolverUser(error, user) {
//   if (error) {
//     console.log(`Deu ruim em user ${error}`);
//     return;
//   }
//   obterTel(user.id, function resolverTel(error1, telefone) {
//     if (error1) {
//       console.log(`Deu ruim em telefone ${error1}`);
//       return;
//     }
//     obterEnd(user.id, function resolverEnd(error2, end) {
//       if (error2) {
//         console.log(`Deu ruim em endereco ${error2}`);
//         return;
//       }
//       console.log(`
//       Nome: ${user.nome}
//       Endereco: ${end.rua}, n°${end.numero}
//       Telefone: (${telefone.ddd}) ${telefone.telefone}
//       `);
//     });
//   });
// });
