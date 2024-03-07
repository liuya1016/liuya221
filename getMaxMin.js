import db from "./connect.js";

const prods = await db.collection('grade')
    .aggregate([{$group:{_id:"$course_id",mAX:{$max:"$grade"},min:{$min:"$grade"}}}]
    ).toArray();


console.log(JSON.stringify(prods, null, 2));

