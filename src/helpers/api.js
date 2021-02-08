export const getApiServer = () => {
    // if (process.env.GATSBY_API_URL) {
    //     return process.env.GATSBY_API_URL;
    // }
    //
    // if (process.env.NODE_ENV === 'development') {
    //     return 'http://localhost:3001';
    // }

    return 'https://api.thegundies.com';
};

export const API_ROUTE = getApiServer();

export const MARKETING = `${API_ROUTE}/marketing`;
