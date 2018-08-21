import { injectable } from "../../di";
import { IMainService } from "src/services/main/main.service";

@injectable()
export class FakeMainService implements IMainService {

    getPageTitle(): string {
        return "Fake main page";
    }
}