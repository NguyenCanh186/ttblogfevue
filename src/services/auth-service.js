import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                name: user.name,
                password: user.password
            })
            .then(response => {
                console.log(response)
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        return true;
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
        });
    }
}

export default new AuthService();
