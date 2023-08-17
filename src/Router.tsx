import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/RouterLayout";
import { CharacterPage } from "./pages/character";

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/character/:id" element={<CharacterPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
