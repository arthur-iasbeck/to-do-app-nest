import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Resposta padrão no endereço raiz /';
  }
}
