export default function validateInfo(values) {
    let errors = {};

    if(!values.idea.trim()){
        errors.idea = "An idea is required"
    }

    if(!values.email){
        errors.email = "An email is required" 
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    return errors;
}