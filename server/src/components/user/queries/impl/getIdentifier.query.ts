import { IUser } from "src/common/interfaces";

export class GetIdentifier {
    constructor(
        public readonly user: IUser
    ) { }
}