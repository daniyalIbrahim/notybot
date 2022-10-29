export namespace main {
	
	export class StepReq {
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new StepReq(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	    }
	}

}

