export function Cookie(){
    const isLogin = JSON.parse(localStorage.getItem('user'));
    
    if (isLogin != null) {
        return 1;
    }
    return 0;
}