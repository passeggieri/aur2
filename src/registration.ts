export class Registration {
    heading : string = 'Registration Form';
    
    //companyName : string = '';
    //fullAgentCode : string = '';
    //address : string = '';
    //province : string = '';
    //country : string = '';
    //zipCode : string;
    //phone : string = '';
    //fax : string = '';
    
    simpleData: registrationForm;
    list: Array<registrationForm> = [];
    
    submit(stuffToInsert: registrationForm) : void {
        this.list.push(stuffToInsert);
    }
}

class registrationForm {
    companyName : string = '';
    fullAgentCode : string = '';
    address : string = '';
    province : string = '';
    country : string = '';
    zipCode : string;
    phone : string = '';
    fax : string = '';
}