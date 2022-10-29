

import { StepReq,TaskReq,ScraperReq, UpdateResult } from "../types";
import {CreateStep} from "../../wailsjs/go/main/App";

export function CreateStepReq(step:StepReq,callback: UpdateResult) {
    CreateStep(step).then(callback);
}