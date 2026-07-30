import { NextResponse } from "next/server";


const buildings = [
    {
        id : 1,
        name : "Main Building",
        category : "Academic"
    },
    {
        id : 2,
        name : "Library",
        category : "Academic"
    },
];

export async function GET() {
    return NextResponse.json(buildings);
}

// export async function GET() {
//     return NextResponse.json({
//         message: "Yessss heehehhe"
//     });
// }

