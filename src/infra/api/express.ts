import { Sequelize } from "sequelize-typescript";
import express, { Express } from "express";
import CustomerModel from "../customer/repository/sequilize/customer.model";
import { customerRoute } from "./routes/customer.route";

export const app: Express = express();

app.use(express.json());
app.use("/customer", customerRoute);

export let sequelize: Sequelize;

async function setupDb() {
    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        // models: [__dirname + '/../../domain/models/*.ts'],
    });
    await sequelize.addModels([CustomerModel])
    await sequelize.sync();
}

setupDb();
