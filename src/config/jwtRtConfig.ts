import { JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRTConfigService implements JwtOptionsFactory {
	constructor (private configService: ConfigService) {}

	createJwtOptions () {
		return this.configService.get('jwt_rt');
	}
}