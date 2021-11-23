$eq
db.collections.find({ ano: { $eq: 2010 } });

//  É IGUAL A:

db.collections.find({ ano: 2010 });

// =====================
$ne 

db.collections.find({ ano: { $ne: 2011 } });
