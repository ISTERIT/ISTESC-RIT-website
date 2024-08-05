import {model, models, Schema} from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    duration: number;
    branch: string;
    phoneNumber: string;
    gender: string;
    tempID: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    tempID: {
        type: String,
        required: true
    }
});

const User = models.User || model<IUser>('User', userSchema);
export default User;