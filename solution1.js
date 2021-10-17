print('(1) db.transport.find({"EMPLOYEE.e#":"11"},{"EMPLOYEE.trips":0})');
db.transport.find({"EMPLOYEE.e#":"11"},{"EMPLOYEE.trips":0}).pretty();

print('(2) db.transport.find({$or:[{"TRUCK.registration":"PKR768"},{"TRUCK.registration":"PKR008"}, {"TRUCK.registration":"SST005"}]},{"_id":0})');
db.transport.find({$or:[{"TRUCK.registration":"PKR768"},{"TRUCK.registration":"PKR008"}, {"TRUCK.registration":"SST005"}]},{"_id":0}).pretty();

print('(3) db.transport.aggregate([{"$unwind": "$EMPLOYEE.maintenances"},{"$match": {"EMPLOYEE.position": "mechanic"}},{"$group": {"_id": {"name": "$EMPLOYEE.name","license": "$EMPLOYEE.licence"},"Number_of_trips": {"$sum": 1 },"Total_time": {"$sum": { "$toInt": "$EMPLOYEE.maintenances.time"}}}}])');
db.transport.aggregate([{"$unwind": "$EMPLOYEE.maintenances"},{"$match": {"EMPLOYEE.position": "mechanic"}},{"$group": {"_id": {"name": "$EMPLOYEE.name","license": "$EMPLOYEE.licence"},"Number_of_trips": {"$sum": 1 },"Total_time": {"$sum": { "$toInt": "$EMPLOYEE.maintenances.time"}}}}]).pretty();

print('(4) db.transport.aggregate([{ $unwind: "$EMPLOYEE.maintenances"},{$match: {"EMPLOYEE.name": "John Fox"}},{"$project": {"_id": 0,"resgistration": "$EMPLOYEE.maintenances.registration"}}])');
db.transport.aggregate([{ $unwind: "$EMPLOYEE.maintenances"},{$match: {"EMPLOYEE.name": "John Fox"}},{"$project": {"_id": 0,"resgistration": "$EMPLOYEE.maintenances.registration"}}]).pretty();

print('(5) db.transport.find({"EMPLOYEE.trips" : {"$size":0}},{"EMPLOYEE.name":1, "_id":0})');
db.transport.find({"EMPLOYEE.trips" : {"$size":0}},{"EMPLOYEE.name":1, "_id":0}).pretty();

print('(6) db.transport.find({"EMPLOYEE.trips":{"$elemMatch":{"legs":"Wollongong"}}},{"EMPLOYEE.name":1, "_id":0})');
db.transport.find({"EMPLOYEE.trips":{"$elemMatch":{"legs":"Wollongong"}}},{"EMPLOYEE.name":1, "_id":0}).pretty();

print('(7) db.transport.find({$and: [{"EMPLOYEE.trips.registration": {$exists: false}},{"EMPLOYEE.position": "driver"}]},{"EMPLOYEE.name": 1,"EMPLOYEE.status": 1,"EMPLOYEE.registration": 1,"EMPLOYEE.licence": 1,"_id": 0})');
db.transport.find({$and: [{"EMPLOYEE.trips.registration": {$exists: false}},{"EMPLOYEE.position": "driver"}]},{"EMPLOYEE.name": 1,"EMPLOYEE.status": 1,"EMPLOYEE.registration": 1,"EMPLOYEE.licence": 1,"_id": 0}).pretty();

print('(8) db.transport.aggregate([{$group: {"_id": "$EMPLOYEE.licence","count": {$sum: 1},"EMPLOYEE": {$addToSet:{"name":"$EMPLOYEE.name","dob": "$EMPLOYEE.dob","address": "$EMPLOYEE.address","licence": "$EMPLOYEE.licence",}}}},{$match: {count: {$gt: 1}}},{$project: {"_id": 0,"EMPLOYEE.name": 1,"EMPLOYEE.dob": 1,"EMPLOYEE.address": 1,"EMPLOYEE.licence": 1}}])');
db.transport.aggregate([{$group: {"_id": "$EMPLOYEE.licence","count": {$sum: 1},"EMPLOYEE": {$addToSet:{"name":"$EMPLOYEE.name","dob": "$EMPLOYEE.dob","address": "$EMPLOYEE.address","licence": "$EMPLOYEE.licence",}}}},{$match: {count: {$gt: 1}}},{$project: {"_id": 0,"EMPLOYEE.name": 1,"EMPLOYEE.dob": 1,"EMPLOYEE.address": 1,"EMPLOYEE.licence": 1}}]).pretty();
