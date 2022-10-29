
/**
 * Read attribute value of a HTML Tag
 * select HTML Tag via
 *      - XPATH
 *      - CSSSelector
 *      - key/value i.e. Attrs/Props etc.
 *      
 */
type UpdateResult = (n: any) => any;

interface HTMLTag {
    name: string
    selector: string[]
    
}
interface BaseReq {
    URL?: string
    Timeout?: string
    RetryAfter?: string
    NumOfTries?: string
};

interface StepReq extends BaseReq{
    name: string
    action?: string
}
interface TaskReq extends BaseReq{
    name: string
    steps: StepReq[]
}

interface ScraperReq extends BaseReq{
    name: string
    tasks: TaskReq[]
}


export type {
    StepReq,
    TaskReq,
    ScraperReq,
    UpdateResult
};