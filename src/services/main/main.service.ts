import { injectable } from "./../../di";

@injectable()
export abstract class IMainService {
    abstract getPageTitle(): string;
}

@injectable()
export class MainService implements IMainService {

    getPageTitle(): string {
        return "Main page";
    }
}
