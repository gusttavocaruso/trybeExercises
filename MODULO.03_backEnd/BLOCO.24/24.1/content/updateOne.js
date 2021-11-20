db.collections.updateOne(
  { school: "Turma 13" },
  { $set: { school: "gui-school" } }, // $set para setar
);

// updateOne faz a busca no DB pelo primeiro parametro e atualiza o primeiro item que encontrar e para de buscar
