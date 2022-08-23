import Vue from "vue";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import FormGroup from '@/components/general/FormGroup'

Vue.component("formWrapper", templates.FormWrapper);
Vue.component("FormGroup", FormGroup);
Vue.use(vuelidateErrorExtractor, { 
    template: templates.singleErrorExtractor.foundation6, // you can also pass your own custom template
    messages: { 
        required: "The {attribute} field is required",
        email: "Field {attribute} is not a proper email address",
        minLength: "Field {attribute} must be at least {min} characters long",
    }, 
    attributes: { 
        email: "Email",
        username: 'Username',
        Fullname: 'Fullname',
        password: "Password",
        identifier: 'Email',
        BookCode: 'Book Code',
        Title: 'Book Title',
        Publisher: 'Publisher',
        Author: 'Author',
        Category: 'Category',
        DateOfPublication: 'Date of Publication',
    }
});

export default vuelidateErrorExtractor;
