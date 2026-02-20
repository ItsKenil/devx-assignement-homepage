// ***** start - import from files
import Header from "./Header";
import { ChildrenTypeComponent } from "@/src/constants/types/types";
// ***** end - import from files

const Layout = ({ children }: ChildrenTypeComponent) => {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto">{children}</div>
        </>
    )
}

export default Layout;