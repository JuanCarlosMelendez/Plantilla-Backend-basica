import express, { Request, Response, response } from 'express';

import Server from './models/server';


const server: Server = new Server ();

server.listen();