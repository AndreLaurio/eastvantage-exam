import { Button } from "antd";
import { useEffect, useState } from "react";
import { httpGetUser } from './api';
import CardProfile from "./components/CardProfile";

export interface IUser {
    name: {
        first: string;
        last: string;
        title: string;
    },
    gender: string;
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    phone: string;
    cell: string;
    dob: {
        date: string;
    },
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;
    }
}

const App = () => {

    const [user, setUser] = useState<IUser[]>([]);
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setBtnLoading(true);
        const user = await httpGetUser();

        // set the data into localStorage
        localStorage.setItem('user', JSON.stringify(user.results))
        setUser(user.results);

        setBtnLoading(false);
    }

    // get data into localStorage
    const storedValue = JSON.parse(localStorage.getItem('user')!);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
           {user.map((item: IUser, index: number) => (
                <CardProfile data={item} key={index}/>
           ))}

            <Button
                type="primary"
                className="mt-[35px] h-[52px] w-[190px] bg-[#0046BF] flex items-center justify-center 
                !text-white sm:text-[20px] font-[500] leading-[23.7px]"
                onClick={(e) => getUser()}
                loading={btnLoading}
            >
                Refresh
            </Button>
        </div>
    )
}

export default App;
