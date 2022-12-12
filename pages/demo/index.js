import React from "react";
import Typography from "@mui/material/Typography";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";


const HoverPopoverPopupState = ({  }) => (
  <PopupState variant="popover" popupId="demoPopover">
    {(popupState) => (
      <div>
        <Typography {...bindHover(popupState)}>
          Hover with a Popover.
        </Typography>
        <HoverPopover
          {...bindPopover(popupState)}

          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography>The content of the Popover.</Typography>
          <Typography>The content of the Popover.</Typography>
          <Typography>The content of the Popover.</Typography>
        </HoverPopover>
      </div>
    )}
  </PopupState>
);



export default HoverPopoverPopupState
