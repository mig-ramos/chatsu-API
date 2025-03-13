import express from "express";
import { createServer, Server } from "http";
import { Server as Io } from "socket.io";

class App {
  public app: express.Application;
  public server: Server;
  private socketIo: Io;
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: "*",
      },
    });

    // Escutar a rota /teste
    this.app.get("/teste", (req, res) => {
      res.status(200).json("Rota de teste!");
    });

    // O evento escutado será disparado qdo o cliente for conectado
    this.socketIo.on("connection", () => {
      console.log("teste de socket.io");
    });
  }
}

export default App;
