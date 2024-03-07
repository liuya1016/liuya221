import db from "./connect.js";

const prods = await db.collection('student')
    .aggregate([


        { $match : { student_number : "202301042" } } 
,
        {

            $lookup: {
                from: "grade",
                localField: "student_number",
                foreignField: "student_number",
                as: "grade",
            },
        },
    ]
    ).toArray();


console.log(JSON.stringify(prods, null, 2));

