export const helpHttp = () => {

    const customFetch = (endpoint, options) => {

        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();

        options.signal = controller.signal;

        options.method = options.method || "GET";

        options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
            .then((res) => res.ok ? res.json() : Promise.reject({}))
            .catch(err => err);
    };

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options) => {
        options.method = "POST";
        return customFetch(url, options)
    };

    return {
        get,
        post
    }
}