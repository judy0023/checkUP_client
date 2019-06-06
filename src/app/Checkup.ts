export class Checkup {
    constructor(
        public cancer_name : string,   
        public cancer_info : string,   
        public inspection_item : string,
        public inspection_reason : string,
        public hos_no : string[],
        public hos_name : string[],
        public hos_addr : string[]
    ) {}
}