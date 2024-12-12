import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Separator } from "@radix-ui/react-select";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import { BASE_URL } from "@/constants.tsx";

const View = () => {
  const { id } = useParams<{ id: string }>(); // 'id' is the route parameter name
  // Using ref to access the input element
  const [logs, setLogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get-logs/${id}`);
        console.log("API Response:", response.data);
        setLogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDestroy = async () => {
    try {
      const confirm1 = confirm("Are you sure you want to destroy?");
      if (confirm1) {
        const response = await axios.post(`${BASE_URL}/destroy/${id}`);
        console.log("Post Response:", response.data);
      }
    } catch (error) {
      console.error("Post Error:", error);
    }
  };

  return (
    <div className="mx-auto w-full p-4 rounded-lg">
      <Label className={"text-3xl ml-1"}>Logs</Label>
      <Card className="p-6 h-[450px] overflow-x-auto">
        <Separator />
        <pre className={"mt-5"}>{logs}</pre>
      </Card>
      <Button onClick={handleDestroy} className="px-4 py-2 mt-2 rounded-md ">
        Destroy
      </Button>
    </div>
  );
};

export default View;
