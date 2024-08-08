import connectDB from "@/lib/mongo-connect";
import User from "@/app/(admin)/lib/User";

console.info(`
This script is used to insert data from user-data.json to the MongoDB database.

This script is not meant to be run in production.
`)

interface IUser {
    Name: string;
    Duration: number;
    Branch: string;
    "Phone Number": number;
    Email: string,
    Gender: string,
    "Temp ID": string,
}

interface IUserFormat {
    name: string;
    email: string;
    duration: number;
    branch: string;
    phoneNumber: string;
    gender: string;
    tempID: string;
}

const MONGO_URI = "";

if(!MONGO_URI) {
    console.error(`MONGO_URI needs to be set`);
}

connectDB(MONGO_URI).then(async () => {
    // @ts-ignore
    const file = Bun.file("user-data.json");

    const data = JSON.parse(await file.text()) as IUser[];
    const formatted_data: IUserFormat[] = [];

    for(let item of data) {
        formatted_data.push({
            name: item.Name,
            email: item.Email,
            duration: item.Duration,
            branch: item.Branch,
            phoneNumber: item["Phone Number"].toString(),
            gender: item.Gender,
            tempID: item["Temp ID"]
        });
    }

    User.insertMany(formatted_data)
        .then(() => {
            console.log("Data inserted");
        })
        .catch((err) => {
            console.error(err);
        });

    return;
});
