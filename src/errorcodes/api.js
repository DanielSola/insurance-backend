export const InvalidSecret = {
    httpCode: 403,
    message: 'Invalid Secret',
};

export const MissingHeaderEmail = {
    httpCode: 402,
    message: `Missing header 'email'`,
};

export const UserNotFound = {
    httpCode: 404,
    message: 'User not found',
};

export const UserNotAuthorized = {
    httpCode: 405,
    message: 'User not authorized'
};