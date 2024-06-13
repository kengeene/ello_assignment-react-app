import { useEffect, useState } from "react"
import { CircularProgress, Typography } from "@mui/material";
export const Loading = () => {
    const [message, setMessage] = useState('');

    useEffect(()=>{
        setTimeout(() => {
            setMessage(
              "Apologies for the delay, this is taking a bit longer than expected. This is due to the server powering down to optimize on resources"
            );
        }, 5000);
    }, [])
    return (
      <div className="flex flex-col items-center">
        <CircularProgress />
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </div>
    );
}