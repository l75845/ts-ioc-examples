import { injectable } from "inversify";
import { Student } from "./interface";

@injectable()
class a implements Student {
  learn(): string {
    return 'learn';
  }
}

export {
    a
}