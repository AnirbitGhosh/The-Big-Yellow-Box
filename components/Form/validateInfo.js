export default function validateInfo(values) {
    let errors = {};

    if(!values.idea.trim()){
        errors.idea = "An idea is required"
    }
    
    return errors;
}