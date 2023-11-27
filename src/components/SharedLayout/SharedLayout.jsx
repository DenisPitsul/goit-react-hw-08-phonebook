import AppBar from "components/AppBar/AppBar";
import LoaderComp from "components/LoaderComp/LoaderComp";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Suspense fallback={<LoaderComp/>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout