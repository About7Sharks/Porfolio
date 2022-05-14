import React, { useEffect, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  msg: string;
}

export const WarningMessage = (props: Props) => {
  const { msg } = props;
  // toggles warning msg
  const [open, setOpen] = useState(true);
  //this hides the warning after 8 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {msg}
      </Alert>
    </Collapse>
  );
};
