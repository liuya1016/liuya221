import db from "./connect.js";

// minimal price for each product 

const prods = await db.collection('grade')
    .aggregate([
        {
            $addFields: {
                mingrade: { $min: "$grade" }
            }
        },
    ]
    ).project({ mingrade: 1, student_number: 1, _id: 0 })
    .toArray();

console.log(JSON.stringify(prods, null, 2));
