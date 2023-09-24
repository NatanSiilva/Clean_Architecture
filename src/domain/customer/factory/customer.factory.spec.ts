import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit tests", () => {
    it("should create a customer", () => {
        const customer = CustomerFactory.create("Customer A");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer A");
        expect(customer.Address).toBeUndefined();
    });

    it("should create a customer with address", () => {
        const address = new Address("Street 1", 500, "zip-code-123", "City 1");
        const customer = CustomerFactory.createWithAddress("Customer C", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer C");
        expect(customer.Address).toBe(address);

    });
});
