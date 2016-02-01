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
    
    editing = undefined;
    
    simpleData: registrationForm;
    list: Array<registrationForm> = [];
    
    submit(stuffToInsert: registrationForm) : void {
        this.list.push(stuffToInsert);
    }
    
    delete(index){
        this.list.splice(index, 1);   
    }
    
    edit(index){
        this.editing = true;
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