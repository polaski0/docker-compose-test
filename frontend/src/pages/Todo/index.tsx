import BackButton from "../../components/BackButton";
import TodoList from "./TodoList";

const Header = () => {
    return (
        <div className="bg-gradient-to-tr from-indigo-700 to-cyan-400 w-screen h-96 flex justify-center items-center">
            <div className="w-2/4">
                <h1 className='font-bold text-6xl tracking-[1rem]'>TODO</h1>
            </div>
        </div>
    )
};

const Todo = () => {
    return (
        <>
            <BackButton />

            <div className='flex flex-col relative'>
                <Header />
                <TodoList />
            </div>
        </>
    )
}

export default Todo;