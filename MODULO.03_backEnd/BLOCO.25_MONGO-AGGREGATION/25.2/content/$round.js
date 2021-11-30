db.samples.aggregate([
  {
    $project: {
      value: 1,
      roundedValue: {
        $round: ["$value", 2] //arredonda a chave 'value' com DUAS casas decimais. 
      }
    }
  }
]);
