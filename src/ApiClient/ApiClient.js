class ApiClient {
    constructor(baseURL = import.meta.env.VITE_BASE_URL) {
        this.baseURL = baseURL;
        this.requestHeaders = {
            'Content-Type': 'application/json'
        };
        if (import.meta.env.VITE_BEARER_TOKEN) {
            this.setBearerToken(import.meta.env.VITE_BEARER_TOKEN);
        }
    }

    setBearerToken(token) {
        this.requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    async makeRequest(url, method = 'GET', body = null, headers = {}) {
        try {
            const response = await fetch(`${this.baseURL}${url}`, {
                method,
                body,
                headers: {
                    ...this.requestHeaders,
                    ...headers
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async get(url, headers = {}) {
        return this.makeRequest(url, 'GET', null, headers);
    }

    async post(url, body, headers = {}) {
        return this.makeRequest(url, 'POST', body, headers);
    }

    async put(url, body, headers = {}) {
        return this.makeRequest(url, 'PUT', body, headers);
    }

    async delete(url, headers = {}) {
        return this.makeRequest(url, 'DELETE', null, headers);
    }

    async postGraphQL(query, variables) {
        const body = JSON.stringify({
            query,
            variables
        });
        const data = await this.post('/', body);
        return data;
    }
}

export default ApiClient;