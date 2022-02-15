db.collections.updateMany(
  { school: "Turma 13" },
  { $set: { school: "gui-school" } }, // $set para setar
);

// O updateMany é muito parecido com o updateOne, porém, quando ele encontra o parametro no DB e atualiza o valor, ele continua fazendo a busca no DB e atualizando os matchs que encontrar.
