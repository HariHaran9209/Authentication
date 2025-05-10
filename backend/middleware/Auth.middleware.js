export const authMiddleware = (statusCode, message) => {
    const error = new Error(message)
    error.statusCode = statusCode
    error.message = message
}