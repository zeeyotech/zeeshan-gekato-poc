import {useEffect, useState} from "react";
import {Card} from "../ui/card";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Separator} from "@radix-ui/react-select";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";

const View = () => {
    const {id} = useParams<{ id: string }>(); // 'id' is the route parameter name
    // Using ref to access the input element
    const [logs, setLogs] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/${id}`);
                console.log('API Response:', response.data);
                setLogs(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // const intervalId = setInterval(fetchData, 3000);
        // return () => clearInterval(intervalId);
    }, []);

    const handleDestroy = async () => {
        try {
            const confirm1 = confirm("Are you sure you want to destroy?");
            if (confirm1) {
                const response = await axios.get(`${URL}/${id}`);
                console.log("Post Response:", response.data);
            }
        } catch (error) {
            console.error("Post Error:", error);
        }
    };

    return (
        <div className="mx-auto w-full p-4 rounded-lg">
            <Card className="p-6 h-[450px] overflow-x-auto">
                <Label className={'text-2xl'}>Logs</Label>
                <Separator/>
                <p className={'mt-5'}>{logs}</p>
            </Card>
            <Button onClick={handleDestroy} className="px-4 py-2 mt-2 rounded-md ">
                Destroy
            </Button>
        </div>
    );
};

export default View;
