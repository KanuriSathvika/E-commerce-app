class CustomError extends Error{
    constructor(message,codee){
        super(message);
        this.code=code
    }
}

export default CustomError