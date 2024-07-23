import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes=()=>
{
    return (
        <Routes>
            <Route 
                path="/" 
                element=
                {
                    <Layout showHero={true}>
                        <HomePage></HomePage>
                    </Layout>
                }
            >
            </Route>
            
            <Route element={<ProtectedRoute></ProtectedRoute>}>
                <Route 
                    path="/user-profile" 
                    element=
                    {
                        <Layout>
                            <UserProfilePage></UserProfilePage>
                        </Layout>
                    }
                >
                </Route>
            </Route>

            <Route path="/auth-callback" element={<AuthCallbackPage></AuthCallbackPage>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    )
}

export default AppRoutes;