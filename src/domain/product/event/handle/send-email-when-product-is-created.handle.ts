import EventHandleInterface from "../../../@shared/event/event-handle.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandleInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Send email when product is created: ${event.eventData}`);
    }
}
