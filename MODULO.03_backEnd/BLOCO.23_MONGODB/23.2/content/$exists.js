db.collections.find(
  { primeiro: { $exists: true } } // verifica se tem
);

db.collections.find(
  { primeiro: { $exists: false } } // verifica se n tem
);
