import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => new Customer("", "John Doe")).toThrowError(
            "Id is required"
        );
    });

    it("should throw error when name is empty", () => {
        expect(() => new Customer("123", "")).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
        const customer = new Customer("123", "John");
        // Act
        customer.changeName("Jane");
        // Assert
        expect(customer.name).toBe("Jane");
    });

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 123, "123345-4555", "City");

        customer.Address = address;
        customer.activate();

        expect(customer.isActive()).toBeTruthy();
    });

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");

        customer.deactivate();

        expect(customer.isActive()).toBeFalsy();
    });

    it("should throw error when address is undefined when you activate a customer", () => {
        const customer = new Customer("1", "Customer 1");

        expect(() => customer.activate()).toThrowError(
            "Address is mandatory to activate a customer"
        );

    });

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(100);
        expect(customer.rewardPoints).toBe(100);

        customer.addRewardPoints(200);
        expect(customer.rewardPoints).toBe(300);

    })
});
