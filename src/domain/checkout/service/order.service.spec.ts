import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order Service unit tests", () => {
    it("should place an order", () => {
        const customer = new Customer("c1", "Customer 1");
        const item1 = new OrderItem("i1", "item-1", 100, "product-1", 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(50);
        expect(order.total()).toBe(100);
    });

    it("should get total of all orders", () => {
        const item1 = new OrderItem("i1", "item-1", 100, "product-1", 1);
        const item2 = new OrderItem("i2", "item-2", 200, "product-2", 2);
        const item3 = new OrderItem("i3", "item-3", 300, "product-3", 3);

        const order1 = new Order("o1", "customer-1", [item1]);
        const order2 = new Order("o2", "customer-2", [item2]);
        const order3 = new Order("o3", "customer-3", [item3]);

        const total = OrderService.getTotal([order1, order2, order3]);

        expect(total).toBe(1400);
    });
});
