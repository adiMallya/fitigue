import { useDispatch } from "react-redux";
import { ActivityForm } from "src/features/activity";
import { Loader, Navbar, ThunkAppDispatch } from "src/shared";

function Activity(): JSX.Element {
    const dispatch = useDispatch<ThunkAppDispatch>();
    
    return <>
        <Navbar />
        <main className="flex flex-col items-start gap-12 w-5/6 m-auto">
            <h1 className="text-white font-bold text-4xl mt-4">Activities</h1>
            <section>
                <ActivityForm/>
            </section>
            <section className="flex flex-wrap gap-8"></section>
        </main>
    </>;
}

export { Activity };