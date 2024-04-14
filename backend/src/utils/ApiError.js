class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error=[]
    ){
        super(message)
        this.message = message
        this.error = error
        this.statusCode = statusCode
        this.data = null
        this.success = false

    }
}

export {ApiError}