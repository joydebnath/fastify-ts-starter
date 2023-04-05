import { FastifyPluginAsync } from 'fastify';

import { db } from '../../db';
import { users as user } from '../../db/schema/users';

const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/', async function (request, reply) {
        const users = await db.select().from(user);
        return reply.send({ data: users })
    })
}

export default users;