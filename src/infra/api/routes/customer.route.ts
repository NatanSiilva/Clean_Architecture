import { CustomerDto } from './../../../usecase/customer/list/list.customer.dto';
import express, { Router, Request, Response } from "express";
import CreateCustomerUseCase from "../../../usecase/customer/create/create.customer.usecase";
import CustomerRepository from "../../customer/repository/sequilize/customer.repository";
import ListCustomerUseCase from '../../../usecase/customer/list/list.customer.usecase';

export const customerRoute = Router();

customerRoute.post("/", async (req: Request, res: Response) => {
    const usecase = new CreateCustomerUseCase(new CustomerRepository());

    try {
        const CustomerDto = {
            name: req.body.name,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                number: req.body.address.number,
                zip: req.body.address.zip,
            }
        }

        const output = await usecase.execute(CustomerDto);
        res.status(200).json(output);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

customerRoute.get("/", async (req: Request, res: Response) => {
    const usecase = new ListCustomerUseCase(new CustomerRepository());
    const output = await usecase.execute({});

    res.format({
        json: async () => res.send(output),
        // xml: async () => res.send(CustomerPresenter.listXML(output)),
    });
});
