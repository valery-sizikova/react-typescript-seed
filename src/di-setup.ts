import { container } from "src/di";
import { IMainService, MainService } from "./services/main/main.service";
import { FakeMainService } from "./services/main/main.service.fake";

export default class DependecyInjectionSetup {
    static async setup() {
        container.bind(IMainService).to(MainService);

        // fake service
        // container.bind(IMainService).to(FakeMainService);
    }
}
