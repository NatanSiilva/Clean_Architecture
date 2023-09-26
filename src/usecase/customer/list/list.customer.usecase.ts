import Customer from "../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import {
    InputListCustomerDto,
    OutputListCustomerDto,
    CustomerDto,
} from "./list.customer.dto";


export default class ListCustomerUseCase {
    private customerRepository: CustomerRepositoryInterface;

    constructor(CustomerRepository: CustomerRepositoryInterface) {
        this.customerRepository = CustomerRepository;
    }

    async execute(_: InputListCustomerDto): Promise<OutputListCustomerDto> {
        const customers = await this.customerRepository.findAll();
        return {
            customers: mapEntitiesToOutput(customers, mapCustomerToOutput),
        };
    }
}

const mapCustomerToOutput = (customer: Customer): CustomerDto => ({
    id: customer.id,
    name: customer.name,
    address: {
        street: customer.Address.street,
        number: customer.Address.number,
        zip: customer.Address.zip,
        city: customer.Address.city,
    },
});

function mapEntitiesToOutput<T, U>(entities: T[], mapFunction: (entity: T) => U): U[] {
    return entities.map(mapFunction);
}
