export class RouteDef<TParams> {
    private parent?: RouteDef<never>;
    private path: string;

    constructor(options: { parent?: RouteDef<any>; path: string; }) {
        this.parent = options.parent;
        this.path = options.path;
    }

    get relativePath(): string {
        if (this.parent) {
            const parentRelativePath = this.parent.relativePath;
            if (parentRelativePath != "/") {
                return this.parent.relativePath + this.path;
            }
        }
        return this.path;
    }

    build(params: TParams): string {
        let routeResult = this.relativePath;
        const skippedParams: { [key: string]: string } = {};
        for (const [key, value] of Object.entries(params)) {
            const isKeyInRoute = routeResult.includes(":" + key);
            if (isKeyInRoute) {
                routeResult = value
                    ? routeResult.replace(":" + key, encodeURIComponent(value))
                    : routeResult.replace("/:" + key, "");
            } else {
                skippedParams[key] = value ? encodeURIComponent(value) : "";
            }
        }
        return routeResult;
    }
}