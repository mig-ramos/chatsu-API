### No client (fron-tend) - NextJS

A importação é: npm install socket.io-client

Criar uma instância através de um arquivo na raiz:

- socket.ts

import {io} from 'socket.io-client;

export const socket = () => io('http://localhost:3333')
