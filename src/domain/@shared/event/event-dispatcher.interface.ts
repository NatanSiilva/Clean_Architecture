import EventHandleInterface from "./event-handle.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
    notify(event: EventInterface): void;
    register(eventName: string, eventHandle: EventHandleInterface): void;
    unregister(eventName: string, eventHandle: EventHandleInterface): void;
    unregisterAll(): void;
}
