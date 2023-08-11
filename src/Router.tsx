import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/RouterLayout";

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
