import { Container, inject, injectable } from "inversify";
import "reflect-metadata";

const container = new Container({ defaultScope: "Singleton" });
export { container, inject, injectable };

interface Abstract<T> {
    prototype: T;
}

export function resolveInject<T>(serviceIdentifier: Abstract<T>): T {
    return container.get(serviceIdentifier);
}

interface Lazy<T> {
    readonly value: T;
}

export function resolveInjectLazy<T>(serviceIdentifier: Abstract<T>, beforeGet?: (instance: T) => void): Lazy<T> {
    return {
        get value() {
            const service = container.get(serviceIdentifier);
            if (beforeGet) {
                beforeGet(service);
            }
            return service;
        }
    };
}
