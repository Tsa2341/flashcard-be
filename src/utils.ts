import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

export interface AuthTokenPayload {
	userId: number;
}

export function signToken(payload: AuthTokenPayload): string {
	return jwt.sign(payload, process.env.SECRETE_WORD as jwt.Secret);
}

export function verifyToken(token: string): AuthTokenPayload {
	return jwt.verify(token, process.env.SECRETE_WORD as jwt.Secret) as AuthTokenPayload;
}

export function decodeAuthHeader(req: Request): AuthTokenPayload | null {
	let payload: AuthTokenPayload;
	const token = req.headers.authorization;

	if (!token) {
		throw new Error('Login to continue!!!!');
	}

	try {
		payload = verifyToken(token);
	} catch ({ message }) {
		return null;
	}

	return payload;
}
