print('(1) db.transport.remove({"EMPLOYEE.name": "John Fox","EMPLOYEE.position": "mechanic"})');
db.transport.remove({"EMPLOYEE.name": "John Fox","EMPLOYEE.position": "mechanic"});

print('(2) db.transport.update({"EMPLOYEE.e#":"11" }, { $unset: {"EMPLOYEE.dob":""}})');
db.transport.update({"EMPLOYEE.e#":"11" }, { $unset: {"EMPLOYEE.dob":""}});

print('(3) db.transport.update({"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"7" },{ $set: {"EMPLOYEE.trips.$.registration":null, "EMPLOYEE.trips.$.trip date":null, "EMPLOYEE.trips.$.legs":null, }})');
db.transport.update({"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"7" },{ $set: {"EMPLOYEE.trips.$.registration":null, "EMPLOYEE.trips.$.trip date":null, "EMPLOYEE.trips.$.legs":null, }})

print('(4) db.transport.update({"EMPLOYEE.e#":"11"},{$addToSet:{"EMPLOYEE.trips":{"trip number":"999","registration":"PKR786"}}})');
db.transport.update({"EMPLOYEE.e#":"11"},{$addToSet:{"EMPLOYEE.trips":{"trip number":"999","registration":"PKR786"}}});

print('(5) db.transport.update({"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"15"},{ $set: {"EMPLOYEE.trips.$.trip date":"28-SEP-18"}})');
db.transport.update({"EMPLOYEE.e#":"11", "EMPLOYEE.trips.trip number":"15"},{ $set: {"EMPLOYEE.trips.$.trip date":"28-SEP-18"}});
