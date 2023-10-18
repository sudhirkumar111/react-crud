import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ Component }) => {
    const isLogin = localStorage.getItem('token') ? true : false
    if (!isLogin) {
        return <Navigate to="/" replace />
    }
    return Component

}

export default ProtectedRoute;