export const InvalidSecret = {
    httpCode: 401,
    message: 'Invalid Secret',
};

export const MissingHeaderEmail = {
    httpCode: 422,
    message: `Missing header 'email'`,
};

export const UserNotFound = {
    httpCode: 404,
    message: 'User not found',
};

export const UserNotAuthorized = {
    httpCode: 401,
    message: 'User not authorized'
};