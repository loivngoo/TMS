import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRepo } from "src/postgres/repository";
import { GetIdentifier } from "../impl/getIdentifier.query";


@QueryHandler(GetIdentifier)
export class GetIdentifierHandler implements IQueryHandler<GetIdentifier> {
    constructor(
        private readonly userRepo: UserRepo
    ) { }

    async execute(query: GetIdentifier) {
        const { user } = query

        const isIdentifier = await this.userRepo.findOne({ id: user.user_id })

        if (!isIdentifier) {
            return `NOT OK, TOMORROW COMEBACK.`
        }
        return isIdentifier
    }
}