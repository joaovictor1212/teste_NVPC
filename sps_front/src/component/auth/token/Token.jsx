export function HasToken() {
    const token = window.sessionStorage.getItem('token');
    if (token) return true;
    return false;
}